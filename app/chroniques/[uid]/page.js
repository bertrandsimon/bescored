import { notFound } from "next/navigation";
import ChroniquesTop from "../chroniquesTop";
import ChroniqueArticle from "../ChroniqueArticle";
import Footer from "../../footer";
import { getChronique } from "../../../lib/chroniques";

export const dynamic = "force-dynamic";

export default async function ChroniquePage({ params }) {
  const post = await getChronique(params.uid, "fr");
  if (!post) notFound();

  return (
    <main>
      <div className="-mt-[120px] z-1">
        <ChroniquesTop />
      </div>
      <ChroniqueArticle post={post} />
      <Footer />
    </main>
  );
}
