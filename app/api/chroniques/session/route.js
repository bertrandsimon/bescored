import { NextResponse } from "next/server";
import { isChroniquesAdmin } from "../../../../lib/chroniques-auth";

export async function GET() {
  return NextResponse.json({ ok: true, authenticated: isChroniquesAdmin() });
}
