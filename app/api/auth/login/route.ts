import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, createSessionToken, getSessionTtlSeconds, isPasswordValid } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };
    const password = body?.password ?? "";

    if (!isPasswordValid(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = await createSessionToken();
    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: getSessionTtlSeconds(),
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
