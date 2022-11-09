import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { ACCESS_TOKEN_KEY, tokenService } from './services/tokenService';

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  const unprotectedRoutes = [
    '/',
    '/register',
  ];

  const protectedRoutes = [
    '/home',
    '/ranking',
    '/transfer',
  ]

  if (unprotectedRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    const token = request.cookies.get(ACCESS_TOKEN_KEY);

    if (!tokenService.isValid(token)) {
      const loginUrl = new URL('/?unauthorized=true', request.url);

      tokenService.delete(null);

      return NextResponse.redirect(loginUrl);
    }

  }

  return NextResponse.next();
}