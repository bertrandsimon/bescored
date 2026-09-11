import { NextResponse } from "next/server";
import { getChroniques, listChroniquesRaw, createChronique } from "../../../lib/chroniques";
import { isChroniquesAdmin } from "../../../lib/chroniques-auth";

function unauthorized() {
  return NextResponse.json(
    { ok: false, error: "Unauthorized" },
    { status: 401 }
  );
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get("locale") === "en" ? "en" : "fr";
    const raw = searchParams.get("raw") === "1";

    if (raw) {
      if (!isChroniquesAdmin()) return unauthorized();
      const posts = await listChroniquesRaw();
      return NextResponse.json({ ok: true, count: posts.length, posts });
    }

    const posts = await getChroniques(locale);
    return NextResponse.json({ ok: true, count: posts.length, posts });
  } catch (error) {
    console.error("GET /api/chroniques", error);
    return NextResponse.json(
      { ok: false, error: "Unable to fetch chroniques" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  if (!isChroniquesAdmin()) return unauthorized();

  try {
    const payload = await request.json();
    const post = await createChronique(payload);
    return NextResponse.json({ ok: true, post });
  } catch (error) {
    console.error("POST /api/chroniques", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Unable to create chronique" },
      { status: 400 }
    );
  }
}
