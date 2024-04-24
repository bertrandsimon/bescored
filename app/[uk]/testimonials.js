"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  return (
    <>
      <section className="py-24 sm:py-32 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center rounded-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <Swiper
            style={{ height: "700px" }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            observer={true}
            observeParents={true}
            breakpoints={{
              // When window width is >= 320px
              320: {
                slidesPerView: 1,
                // spaceBetween: 20
              },
              // When window width is >= 480px
              480: {
                slidesPerView: 1,
                // spaceBetween: 30
              },
              // When window width is >= 640px
              640: {
                slidesPerView: 2,
                // spaceBetween: 40
              },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 border-gray-900/10">
                <Image
                  className="self-start"
                  src="/images/testimonials/jo.png"
                  alt="LPG"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between ">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900 ">
                    <p>
                      Christophe Hausswirth dedicates his life to serving
                      athletes and health more generally; first as an athlete at
                      the international level, but especially as a researcher
                      with whom I had the pleasure of working at INSEP. <br />
                      <br />
                      He possesses these two rare qualities: knowledge of
                      high-level practice and the scientific rigor implemented
                      to achieve it.
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/testimonials/man2.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Dr. Philippe Le Van
                      </div>
                      <div className="mt-1 text-gray-500">
                        Medical Director (CMO) Paris 2024
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-8">
                <Image
                  className="self-start"
                  src="/images/logos/16.png"
                  alt="Mouratoglou"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900">
                    <p>
                      “Exceptional work both in implementing recovery protocols
                      and in nutritional monitoring of athletes. <br />
                      <br />
                      Anything related to the optimization of performance is
                      addressed. beScored is an attentive partner that provides
                      all the answers to my expectations and those of the
                      athletes.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/moura.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Patrick Mouratoglou
                      </div>
                      <div className="mt-1 text-gray-500">
                        Founder Mouratoglou Tennis Academy
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-8">
                <Image
                  className="self-start"
                  src="/images/testimonials/cerba.png"
                  alt="Cerballiance"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900">
                    <p>
                      The implementation of an evaluation protocol with beScored
                      is always a moment of technological excitement. Dr.
                      Hausswirth&apos;s scientific rigor and extensive knowledge
                      allow us to approach performance and recovery from all
                      angles. <br />
                      <br />
                      Thank you, Christophe, for integrating the accuracy and
                      precision of biological measurement into your specific
                      approach. The CERBALLIANCE technical platforms are at the
                      service of Be Scored..
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/testimonials/cerba-dg.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Dr. Vincent RAIMONDI
                      </div>
                      <div className="mt-1 text-gray-500">Cerballiance CEO</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-8">
                <Image
                  className="self-start"
                  src="/images/testimonials/1.png"
                  alt="LPG"
                  height={50}
                  width={208}
                />
                <figure className="mt-10 flex flex-auto flex-col justify-between ">
                  <blockquote className="text-normal font-normal leading-8 text-gray-900 ">
                    <p>
                      We have been working alongside beScored and its founder
                      since 2020, and the ease of executing research is
                      remarkable. <br />
                      <br />I have never seen a company that can be as precise
                      in delivering reports, and the support provided for the
                      application domains is still of great assistance to our
                      company on a daily basis. We have embarked together on
                      several years of collaboration.
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      className="rounded-full bg-gray-50"
                      src="/images/testimonials/man.jpg"
                      alt=""
                      height={80}
                      width={80}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        Sammy Gharieni
                      </div>
                      <div className="mt-1 text-gray-500">Gharieni group</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
