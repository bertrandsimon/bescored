import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fade, Slide } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import { Fragment } from "react";
import { useState, useEffect } from "react";
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
        {/* slide 0 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/masak-bg2.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-center"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={500}>
                    <p className="text-sm p-1">30 ans d&rsquo;experience</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">diagnostic</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">
                      forme & bien-être
                    </p>
                  </Slide>
                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link href="/masak">
                        <button className="btn btn-blue cursor-pointer">
                          en savoir +
                        </button>
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex">
                {/* <Fade duration={1000} delay={1500}>
                  <Slide direction="up" duration={1000} delay={1500}>
                    <Image
                      src="/images/tag3.png"
                      width={249}
                      height={50}
                      alt="Tag"
                    />
                  </Slide>
                </Fade> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 1 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/sante-bg.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-right"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={500}>
                    <p className="text-sm p-1">30 ans d&apos;experience</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">
                      centre d&apos;expertise
                    </p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">scientifique</p>
                  </Slide>

                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link href="/cases">
                        <button className="btn btn-blue cursor-pointer">
                          en savoir +
                        </button>
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex">
                <Fade duration={1000} delay={1500}>
                  <Slide direction="up" duration={1000} delay={1500}>
                    <Image
                      src="/images/tag1.png"
                      width={249}
                      height={50}
                      alt="Tag"
                    />
                  </Slide>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 2 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/sport-bg.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-center"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={500}>
                    <p className="text-sm p-1">30 ans d&rsquo;experience</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">performance</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">
                      et récupération
                    </p>
                  </Slide>
                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link href="/cases">
                        <button className="btn btn-blue cursor-pointer">
                          en savoir +
                        </button>
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex">
                <Fade duration={1000} delay={1500}>
                  <Slide direction="up" duration={1000} delay={1500}>
                    <Image
                      src="/images/tag2.png"
                      width={220}
                      height={50}
                      alt="Tag"
                    />
                  </Slide>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        {/* <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/corporate-bg.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-center"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={500}>
                    <p className="text-sm p-1">30 ans d&rsquo;experience</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">
                      santé mentale
                    </p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">en entreprise</p>
                  </Slide>
                  <Slide direction="up" duration={1000} delay={800}>
                    <div className="pt-4">
                      <Link href="/cases">
                        <button className="btn btn-blue cursor-pointer">
                          en savoir +
                        </button>
                      </Link>
                    </div>
                  </Slide>
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex">
                <Fade duration={1000} delay={1500}>
                  <Slide direction="up" duration={1000} delay={1500}>
                    <Image
                      src="/images/tag3.png"
                      width={249}
                      height={50}
                      alt="Tag"
                    />
                  </Slide>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        {/* slide 4 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/images/bienetre-bg.jpg')`,
              height: "580px",
            }}
            className="aspect-auto max-h-128 bg-cover rounded-b-lg z-1 bg-center"
          >
            <div className="flex pt-[230px] w-full items-center justify-center sm:justify-around">
              <div className="text-white uppercase oswald sm:pl-[60px] drop-shadow-md">
                <Fade duration={1000} delay={500} cascade damping={0.2}>
                  <Slide direction="down" duration={1000} delay={500}>
                    <p className="text-sm p-1">30 ans d&rsquo;experience</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={600}>
                    <p className="text-5xl p-1 font-extralight">
                      validation de vos
                    </p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">dispositifs de</p>
                  </Slide>
                  <Slide direction="down" duration={1000} delay={700}>
                    <p className="text-5xl p-1 font-semibold">bien-être</p>
                  </Slide>
                  {/* <Slide direction="up" duration={1000} delay={800}>
                                  <div className='pt-4'><button className='btn btn-blue cursor-pointer'>en savoir +</button></div>
                              </Slide> */}
                </Fade>
              </div>
              <div className="sm:flex-shrink-0 hidden sm:flex mb-14">
                <Fade duration={1000} delay={1500}>
                  <Slide direction="up" duration={1000} delay={1500}>
                    <Image
                      src="/images/tag4.png"
                      width={220}
                      height={50}
                      alt="Tag"
                    />
                  </Slide>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
