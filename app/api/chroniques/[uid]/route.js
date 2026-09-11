import { NextResponse } from "next/server";
import {
  getChronique,
  getChroniqueRaw,
  updateChronique,
  deleteChronique,
} from "../../../../lib/chroniques";
import { isChroniquesAdmin } from "../../../../lib/chroniques-auth";

function unauthorized() {
  return NextResponse.json(
    { ok: false, error: "Unauthorized" },
    { status: 401 }
  );
}

export async function GET(request, { params }) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get("locale") === "en" ? "en" : "fr";
    const raw = searchParams.get("raw") === "1";

    if (raw) {
      if (!isChroniquesAdmin()) return unauthorized();
      const post = await getChroniqueRaw(params.uid);
      if (!post) {
        return NextResponse.json(
          { ok: false, error: "Not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ ok: true, post });
    }

    const post = await getChronique(params.uid, locale);
    if (!post) {
      return NextResponse.json(
        { ok: false, error: "Not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, post });
  } catch (error) {
    console.error("GET /api/chroniques/[uid]", error);
    return NextResponse.json(
      { ok: false, error: "Unable to fetch chronique" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  if (!isChroniquesAdmin()) return unauthorized();

  try {
    const payload = await request.json();
    const post = await updateChronique(params.uid, payload);
    if (!post) {
      return NextResponse.json(
        { ok: false, error: "Not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, post });
  } catch (error) {
    console.error("PUT /api/chroniques/[uid]", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Unable to update chronique" },
      { status: 400 }
    );
  }
}

export async function DELETE(_request, { params }) {
  if (!isChroniquesAdmin()) return unauthorized();

  try {
    const deleted = await deleteChronique(params.uid);
    if (!deleted) {
      return NextResponse.json(
        { ok: false, error: "Not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/chroniques/[uid]", error);
    return NextResponse.json(
      { ok: false, error: "Unable to delete chronique" },
      { status: 500 }
    );
  }
}
