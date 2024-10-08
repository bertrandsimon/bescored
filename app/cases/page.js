import Image from "next/image";
import CasesTop from "./casesTop";
import Content from "./content";
import Method from "../method";
import Footer from "../footer";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <CasesTop />
        <Content />
        <div className="pt-12 pb-24">
          <Method />
        </div>
      </div>
      <Footer />
    </main>
  );
}
