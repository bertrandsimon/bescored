"use client";
import Image from "next/image";
import MasakTop from "./masakTop";

import TopContent from "./topContent";
import Content from "./content";

import Footer from "../footer";

export default function MasakPage() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <MasakTop />
      </div>

      <TopContent />

      <Content />
      <Footer />
    </main>
  );
}
