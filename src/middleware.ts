import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { supabase } from "@store";

export async function middleware(request: NextRequest) {
  console.log("Middleware is running");

  const token: any = request.cookies.get("sb-auth-token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token?.value);

  if (error || !user) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/product/list"], // Match all routes except those starting with /auth
};
