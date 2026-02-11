import { NextResponse } from 'next/server';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.wellnessz.fitterifyapp';
const APP_STORE_URL =
  'https://apps.apple.com/us/app/fitterify/id6756501595';

const IOS_REGEX = /iPhone|iPad|iPod/i;
const ANDROID_REGEX = /Android/i;

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith('/app')) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get('user-agent') || '';

  if (IOS_REGEX.test(userAgent)) {
    return NextResponse.redirect(new URL(APP_STORE_URL), 302);
  }

  if (ANDROID_REGEX.test(userAgent)) {
    return NextResponse.redirect(new URL(PLAY_STORE_URL), 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/app', '/app/:path*'],
};
