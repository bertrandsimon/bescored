"use client";
import Image from "next/image";
import ExpertiseTop from "./expertiseTop";
import Faq from "./faq";
import TopContent from "./topContent";
import Content from "../content";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-1">
        <ExpertiseTop />
      </div>

      <TopContent />

      <Faq />

      <Content />
    </main>
  );
}
