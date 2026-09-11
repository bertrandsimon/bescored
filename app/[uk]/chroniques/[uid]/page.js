import { notFound } from "next/navigation";
import ChroniquesTop from "../chroniquesTop";
import ChroniqueArticle from "../../../chroniques/ChroniqueArticle";
import Footer from "../../footer";
import { getChronique } from "../../../../lib/chroniques";

export const dynamic = "force-dynamic";

export default async function ChroniquePage({ params }) {
  const post = await getChronique(params.uid, "en");
  if (!post) notFound();

  return (
    <main>
      <div className="-mt-[120px] z-1">
        <ChroniquesTop />
      </div>
      <ChroniqueArticle
        post={post}
        backHref="/uk/chroniques"
        backLabel="All columns"
        linkedinLabel="Read the LinkedIn post"
      />
      <Footer />
    </main>
  );
}
