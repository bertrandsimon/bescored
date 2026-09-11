import NewsTop from "./newsTop";
import NewsFeed from "../../news/NewsFeed";
import Footer from "../footer";
import { getNews } from "../../../lib/news";

export default async function NewsPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const posts = await getNews("en");

  return (
    <main>
      <div className="-mt-[120px] z-1">
        <NewsTop />
      </div>
      <NewsFeed posts={posts} page={page} basePath="/uk/news" />
      <Footer />
    </main>
  );
}
