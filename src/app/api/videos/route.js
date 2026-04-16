import { readFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';
import { createClient } from 'redis';

const DATA_PATH = join(process.cwd(), 'data', 'videos.json');

// Cache the Redis Connection for Serverless environments
let cachedClient = null;

async function getRedisClient() {
  if (cachedClient) return cachedClient;
  if (!process.env.REDIS_URL) return null;

  const client = createClient({ url: process.env.REDIS_URL });
  client.on('error', (err) => console.error('Redis Error:', err));
  
  await client.connect();
  cachedClient = client;
  return client;
}

export async function GET() {
  try {
    const client = await getRedisClient();
    
    // If no Redis configured yet, just fallback securely
    if (!client) throw new Error("No REDIS_URL found");

    const rawData = await client.get('portfolio_videos');
    let data;

    if (!rawData) {
      // 2. If it's completely empty (first time running), seed it from local JSON
      data = JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
      await client.set('portfolio_videos', JSON.stringify(data));
    } else {
      data = JSON.parse(rawData);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.warn("Redis issue (likely environment variables missing). Falling back to local JSON for GET.");
    
    // 3. Fallback: If Redis fails (e.g. not configured locally), fallback to local reads.
    try {
      const data = JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({ error: 'Failed to read videos' }, { status: 500 });
    }
  }
}

export async function PUT(request) {
  try {
    const client = await getRedisClient();
    if (!client) {
      return NextResponse.json({ error: 'No REDIS_URL configured' }, { status: 500 });
    }

    const body = await request.json();
    
    // Update the remote Redis Database
    await client.set('portfolio_videos', JSON.stringify(body));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Redis PUT Error:", error.message);
    return NextResponse.json({ error: 'Failed to save videos to Redis Database. Check environment variables!' }, { status: 500 });
  }
}
