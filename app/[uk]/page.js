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
import Footer from "./footer";
// import { Metadata } from 'next'

export default function Home() {
  return (
    <>
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
        <Footer />
      </main>
    </>
  );
}
