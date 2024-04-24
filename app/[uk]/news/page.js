import Image from "next/image";
import NewsTop from "./newsTop";
import News from ".";
import News2 from "../news2";
import News3 from "../news3";
export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <NewsTop />
      </div>
      <News3 />
      <News2 />
      <News />
    </main>
  );
}
