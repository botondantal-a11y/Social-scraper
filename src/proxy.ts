import { NextResponse } from "next/server";
import { auth } from "@/auth";

// Minden oldal és API bejelentkezéshez kötött, kivéve a login és az auth végpontok.
export default auth((req) => {
  const { pathname } = req.nextUrl;

  const isPublic =
    pathname === "/login" ||
    pathname.startsWith("/api/auth");

  if (!req.auth && !isPublic) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Bejelentkezés szükséges." }, { status: 401 });
    }
    const url = new URL("/login", req.nextUrl.origin);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.png|.*\\.svg|.*\\.png).*)",
  ],
};
