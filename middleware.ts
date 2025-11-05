import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  
  // Redirect www to non-www
  if (host?.startsWith('www.')) {
    const newHost = host.replace('www.', '')
    const url = request.nextUrl.clone()
    url.host = newHost
    
    return NextResponse.redirect(url, 301) // 301 permanent redirect
  }
  
  return NextResponse.next()
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
}
