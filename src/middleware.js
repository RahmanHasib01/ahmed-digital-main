import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/dashboard/:path*', '/api/videos/:path*'],
};

export function middleware(req) {
  const url = req.nextUrl.pathname;
  
  // Publicly allow GET requests to the videos API so the frontend renders correctly
  if (url.startsWith('/api/videos') && req.method === 'GET') {
    return NextResponse.next();
  }

  // Check for Basic Authentication Header
  const basicAuth = req.headers.get('authorization');
  
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // Default to admin:secret if environment variables are not set
    const adminUser = process.env.ADMIN_USER || 'admin';
    const adminPass = process.env.ADMIN_PASS || process.env.API_SECRET || 'secret';

    if (user === adminUser && pwd === adminPass) {
      return NextResponse.next();
    }
  }

  // Trigger Native Browser Authentication Prompt
  return new NextResponse('Authentication required to access the Dashboard.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Dashboard Access"',
    },
  });
}
