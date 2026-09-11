"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const logos = [
  { src: "/images/logos/1.jpg", alt: "Mecotec" },
  { src: "/images/logos/3.jpg", alt: "LPG" },
  { src: "/images/logos/4.jpg", alt: "Pôle Santé" },
  { src: "/images/logos/5.jpg", alt: "PSG" },
  { src: "/images/logos/6.jpg", alt: "Johnson & Johnson" },
  { src: "/images/logos/7.jpg", alt: "Bebo" },
  { src: "/images/logos/8.jpg", alt: "Cerballiance" },
  { src: "/images/logos/12.jpg", alt: "University of Technology Sydney" },
  { src: "/images/logos/13.jpg", alt: "Pôle Santé Saint Jean" },
  { src: "/images/logos/16.jpg", alt: "CapSix" },
  { src: "/images/logos/17.jpg", alt: "My Clinics" },
  { src: "/images/logos/21.jpg", alt: "STENDO" },
  { src: "/images/logos/30.jpg", alt: "Partner" },
  { src: "/images/logos/31.jpg", alt: "Partner" },
  { src: "/images/logos/32.jpg", alt: "Partner" },
  { src: "/images/logos/33.jpg", alt: "Partner" },
  { src: "/images/logos/34.jpg", alt: "Partner" },
  { src: "/images/logos/35.jpg", alt: "Partner" },
  { src: "/images/logos/36.jpg", alt: "Partner" },
  { src: "/images/logos/37.jpg", alt: "Partner" },
  { src: "/images/logos/38.jpg", alt: "Partner" },
  { src: "/images/logos/39.jpg", alt: "Partner" },
  { src: "/images/logos/40.jpg", alt: "Partner" },
  { src: "/images/logos/41.jpg", alt: "Partner" },
  { src: "/images/logos/42.jpg", alt: "Partner" },
  { src: "/images/logos/43.jpg", alt: "Partner" },
  { src: "/images/logos/44.jpg", alt: "Partner" },
  { src: "/images/logos/45.jpg", alt: "Partner" },
  { src: "/images/logos/46.jpg", alt: "Partner" },
  { src: "/images/logos/47.jpg", alt: "Partner" },
  { src: "/images/logos/48.jpg", alt: "Partner" },
  { src: "/images/logos/49.jpg", alt: "Partner" },
  { src: "/images/logos/50.jpg", alt: "Partner" },
  { src: "/images/logos/51.jpg", alt: "Partner" },
];

export default function Logos() {
  return (
    <>
      <div className="text-center pb-20">
        <p className="uppercase oswald text-4xl ">
          <span className="pr-2 font-semibold">they trust</span>
          <span className="font-light">us</span>
        </p>
      </div>

      <Swiper
        style={{ height: "120px" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        observer={true}
        observeParents={true}
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.src}>
            <Image
              className="mx-auto"
              src={logo.src}
              alt={logo.alt}
              width={216}
              height={68}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
