import Image from "next/image";
import CasesTop from "./casesTop";
import Content from "./content";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <CasesTop />
        <Content />
      </div>
    </main>
  );
}
