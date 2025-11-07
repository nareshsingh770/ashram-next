import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for admin routes, API routes, static files
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  console.log(pathnameHasLocale, "pathnameHasLocale");
  // If pathname has locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  } else if (!pathnameHasLocale) {
    // If pathname does not have locale, redirect to default locale
    const defaultLocale = routing.locales[0];
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // For root path or any non-localized path, serve as English (default locale)
  // This allows / to serve English content directly
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - admin routes
    "/((?!api|_next/static|_next/image|favicon.ico|admin).*)",
  ],
};
