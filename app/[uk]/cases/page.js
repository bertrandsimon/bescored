import CasesTop from "./casesTop";
import Content from "./content";
import Footer from "../footer";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <CasesTop />
        <Content />
      </div>
      <Footer />
    </main>
  );
}
