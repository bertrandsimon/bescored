import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  checkChroniquesPassword,
  chroniquesCookieOptions,
  getChroniquesAdminToken,
  getChroniquesCookieName,
} from "../../../../lib/chroniques-auth";

export async function POST(request) {
  const { password } = await request.json();
  if (!checkChroniquesPassword(password)) {
    return NextResponse.json(
      { ok: false, error: "Invalid password" },
      { status: 401 }
    );
  }

  const token = getChroniquesAdminToken();
  cookies().set(getChroniquesCookieName(), token, chroniquesCookieOptions());
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  cookies().delete(getChroniquesCookieName());
  return NextResponse.json({ ok: true });
}
