"use client";
import Cards from "./cards";
import Editorial from "./editorial";
import Logos from "./logos";
import Testimonials from "./testimonials";
import News3 from "./news3";
import SliderSwiper from "./sliderSwiper";
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <div className="-mt-[120px] z-0 relative swiper-container">
        <SliderSwiper />
      </div>

      <div className="-mt-[50px] sm:-mt-[60px] z-1000">
        <Cards />
      </div>

      <Editorial />
      <Logos />
      <Testimonials />
      <News3 />
      <Footer />
    </main>
  );
}
