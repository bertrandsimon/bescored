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
import SliderSwiper from "./sliderSwiper";
import ParticlesZone from "./particlesZone";
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
      {/* <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head> */}
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
        <News2 />
        <ParticlesZone />
      </main>
    </>
  );
}
