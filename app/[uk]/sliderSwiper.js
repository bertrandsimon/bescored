"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fade, Slide } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import Link from "next/link";

export default function SliderSwiper() {
  return (
    <div className="swiper-container">
      <Swiper
        style={{ height: "580px" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        observer={true}
        observeParents={true}
        className="aspect-auto height-[580px] bg-cover rounded-b-lg z-0 relative"
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/masak-bg2.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-center"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around text-center md:text-left">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={500}>
                    <p className="text-sm p-1">Medical device</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">
                      Mental &amp; Physical
                    </p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">
                      Well-being Report
                    </p>
                  </Slide>
                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link
                        href="/uk/masak"
                        className="btn btn-blue cursor-pointer inline-block relative z-20"
                      >
                        Learn more
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex"></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/sante-bg.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-right"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around text-center md:text-left">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">scientific</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">
                      expertise center
                    </p>
                  </Slide>
                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link
                        href="/uk/expertise"
                        className="btn btn-blue cursor-pointer inline-block relative z-20"
                      >
                        Learn more
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex">
                <Fade duration={1000} delay={1500}>
                  <Slide direction="up" duration={1000} delay={1500}>
                    <Image
                      src="/images/tag1-uk.png"
                      width={202}
                      height={50}
                      alt="Tag"
                    />
                  </Slide>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/sport-bg.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-center"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around text-center md:text-left">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">performance</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">and recovery</p>
                  </Slide>
                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link
                        href="/uk/expertise"
                        className="btn btn-blue cursor-pointer inline-block relative z-20"
                      >
                        Learn more
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex">
                <Fade duration={1000} delay={1500}>
                  <Slide direction="up" duration={1000} delay={1500}>
                    <Image
                      src="/images/tag2-uk.png"
                      width={202}
                      height={50}
                      alt="Tag"
                    />
                  </Slide>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/bienetre-bg.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-center"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around text-center md:text-left">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">
                      assessing the benefits
                    </p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">
                      of your wellness
                    </p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">devices</p>
                  </Slide>
                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link
                        href="/uk/expertise"
                        className="btn btn-blue cursor-pointer inline-block relative z-20"
                      >
                        Learn more
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex mb-14"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
