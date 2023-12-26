"use client";
import Image from "next/image";
import Slider from "./slider";
import Cards from "./cards";
import Editorial from "./editorial";
import Method from "./method";
import Stats from "./stats";
import Content from "./content";
import Logos from "./logos";
import Testimonials from "./testimonials";
import News from "./news";
import News2 from "./news2";
import News3 from "./news3";
import SliderSwiper from "./sliderSwiper";
// import ParticlesZone from "./particlesZone";
import ToolBar from "./toolBar";
import NavMobile from "./navMobile";
import Head from "next/head";
import { Fragment } from "react";
// import { Metadata } from 'next'
import Lottie from "lottie-react";
import dna from "../public/lotties/dna.json";

export default function Home() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: dna,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <div className="z-20 sticky top-0">
        <ToolBar />
        <div className="visible sm:hidden">
          <NavMobile />
        </div>
      </div> */}
      <main>
        <div className="-mt-[120px] z-0 relative swiper-container">
          <SliderSwiper />
        </div>

        <div className="-mt-[50px] sm:-mt-[60px] z-1000">
          <Cards />
        </div>

        <Editorial />

        <Method />
        <Stats />
        <Content />
        <Logos />
        <Testimonials />
        <News3 />
      </main>
    </>
  );
}
