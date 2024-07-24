import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "firebase/auth";
import { auth } from "@/app/firebase/config"; // Adjust the import path as needed

export function middleware(req: NextRequest) {
  const auth = getAuth();
  const { currentUser } = auth;
  const { pathname } = req.nextUrl;

  // Allow access to login and signup pages
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the login page
  if (!currentUser && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}
