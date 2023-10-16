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
import SliderSwiper from "./sliderSwiper";
import ParticlesZone from "./particlesZone";
import { Fragment } from "react";

import Lottie from "lottie-react";
import animationData from "../public/lotties/animation.json";

export default function Home() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main>
      <div className="-mt-[120px] z-0 relative">
        <SliderSwiper />
      </div>

      {/* <div className='-mt-[120px] z-1'>
       <Slider/>
     </div> */}

      <div className="-mt-[50px] sm:-mt-[60px] z-1000">
        <Cards />
      </div>

      <Editorial />
      {/* <div>
        <h1>LOTTIE</h1>
        <Lottie options={options} width={400} height={400} />
      </div> */}

      <Method />
      <Stats />
      <Content />
      <Logos />
      <Testimonials />
      <News />
      <ParticlesZone />
    </main>
  );
}
