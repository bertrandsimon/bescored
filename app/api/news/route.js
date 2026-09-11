import { NextResponse } from "next/server";
import { getNews } from "../../../lib/news";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get("locale") === "en" ? "en" : "fr";
    const posts = await getNews(locale);
    return NextResponse.json({ ok: true, count: posts.length, posts });
  } catch (error) {
    console.error("GET /api/news", error);
    return NextResponse.json(
      { ok: false, error: "Unable to fetch news" },
      { status: 500 }
    );
  }
}
