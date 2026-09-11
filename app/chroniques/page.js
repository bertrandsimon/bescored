import ChroniquesTop from "./chroniquesTop";
import ChroniquesFeed from "./ChroniquesFeed";
import Footer from "../footer";
import { getChroniques } from "../../lib/chroniques";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Chroniques du lundi | beScored",
};

export default async function ChroniquesPage() {
  const posts = await getChroniques("fr");

  return (
    <main>
      <div className="-mt-[120px] z-1">
        <ChroniquesTop />
      </div>
      <ChroniquesFeed posts={posts} />
      <Footer />
    </main>
  );
}
