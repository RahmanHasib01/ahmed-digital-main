import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

const DATA_PATH = join(process.cwd(), 'data', 'videos.json');

function readVideos() {
  return JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
}

function writeVideos(data) {
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET() {
  try {
    const data = readVideos();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to read videos' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    writeVideos(body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save videos' }, { status: 500 });
  }
}
