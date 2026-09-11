import ChroniquesTop from "./chroniquesTop";
import ChroniquesFeed from "../../chroniques/ChroniquesFeed";
import Footer from "../footer";
import { getChroniques } from "../../../lib/chroniques";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Monday columns | beScored",
};

export default async function ChroniquesPage() {
  const posts = await getChroniques("en");

  return (
    <main>
      <div className="-mt-[120px] z-1">
        <ChroniquesTop />
      </div>
      <ChroniquesFeed
        posts={posts}
        basePath="/uk/chroniques"
        readMore="Read more"
      />
      <Footer />
    </main>
  );
}
