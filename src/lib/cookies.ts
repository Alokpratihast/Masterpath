import { NextResponse } from "next/server";

export const AUTH_COOKIE_NAME = "masterpath_token";

export class CookieService {
  /**
   * Set Authentication Cookie
   */
  static setAuthCookie(
    response: NextResponse,
    token: string
  ) {
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 Days
    });
  }

  /**
   * Clear Authentication Cookie
   */
  static clearAuthCookie(
    response: NextResponse
  ) {
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });
  }
}