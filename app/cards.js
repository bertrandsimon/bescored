"use client";

import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import { Fade, Slide } from "react-awesome-reveal";
import Atropos from "atropos/react";
import "atropos/css";
import Link from "next/link";

function HoverCard({
  initialSrc,
  hoverSrc,
  width,
  height,
  alt,
  href,
  withAtropos = false,
}) {
  const [hovered, setHovered] = useState(false);

  const images = (
    <div
      className="relative overflow-hidden rounded-xl drop-shadow-lg"
      style={{ width, height }}
    >
      <Image
        src={initialSrc}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
        priority
      />
      <Image
        src={hoverSrc}
        alt=""
        width={width}
        height={height}
        className={`absolute inset-0 w-full h-full object-cover ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );

  return (
    <Link
      href={href}
      className="block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {withAtropos ? (
        <Atropos
          className="my-atropos cursor-pointer"
          shadow="false"
          shadowScale="0.7"
          shadowOffset="30"
          rotateXMax="30"
          rotateYMax="60"
          highlight="true"
        >
          {images}
        </Atropos>
      ) : (
        images
      )}
    </Link>
  );
}

export default function Cards() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/cards/card1b.jpg" as="image" />
        <link rel="preload" href="/images/cards/card2b.jpg" as="image" />
        <link rel="preload" href="/images/cards/card3b.jpg" as="image" />
      </Head>

      <div className="grid grid-cols-12 px-2 gap-2 justify-between">
        <div className="order-1 col-span-12 lg:col-span-5 md:col-span-12 md:order-2 ">
          <div className="pl-10 pt-24">
            <Fade
              duration={1000}
              delay={1000}
              cascade
              damping={0.2}
              triggerOnce
            >
              <Slide direction="up" duration={500} delay={1000} triggerOnce>
                <p className="font-light italic">
                  “Après 6 jeux olympiques où j&apos;ai dirigé les recherches
                  pour nos athlètes à l&rsquo;Institut National du Sport
                  (INSEP), j’ai fondé beScored Institute. <br />
                  <br />
                  Tirer le meilleur de vos dispositifs ou de vos collaborateurs est
                  notre priorité“
                </p>{" "}
              </Slide>
              <Slide direction="up" duration={500} delay={1200} triggerOnce>
                <Image
                  className="pt-8 w-auto"
                  src="/images/signature.jpg"
                  width={252}
                  height={90}
                  alt="Signature"
                />{" "}
              </Slide>
            </Fade>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden order-2 col-span-12 lg:col-span-7 sm:flex sm:flex-row gap-2 sm:gap-6 justify-end">
          <Fade duration={1000} delay={1000} cascade damping={0.2} triggerOnce>
            <Slide direction="right" duration={500} delay={1000} triggerOnce>
              <HoverCard
                href="/expertise"
                initialSrc="/images/cards/card1.jpg"
                hoverSrc="/images/cards/card1b.jpg"
                width={206}
                height={284}
                alt="Santé"
                withAtropos
              />
            </Slide>

            <Slide direction="right" duration={500} delay={1200} triggerOnce>
              <HoverCard
                href="/expertise"
                initialSrc="/images/cards/card2.jpg"
                hoverSrc="/images/cards/card2b.jpg"
                width={206}
                height={284}
                alt="Sport"
                withAtropos
              />
            </Slide>

            <Slide direction="right" duration={500} delay={1400} triggerOnce>
              <HoverCard
                href="/expertise"
                initialSrc="/images/cards/card3.jpg"
                hoverSrc="/images/cards/card3b.jpg"
                width={206}
                height={284}
                alt="Bien-être"
                withAtropos
              />
            </Slide>
          </Fade>
        </div>
      </div>

      {/* mobile */}
      <div className="flex justify-around items-center sm:hidden pt-10">
        <div className="grid grid-cols-2 gap-6">
          <HoverCard
            href="/expertise"
            initialSrc="/images/cards/card1.jpg"
            hoverSrc="/images/cards/card1b.jpg"
            width={206}
            height={284}
            alt="Santé"
          />
          <HoverCard
            href="/expertise"
            initialSrc="/images/cards/card2.jpg"
            hoverSrc="/images/cards/card2b.jpg"
            width={206}
            height={239}
            alt="Sport"
          />
          <HoverCard
            href="/expertise"
            initialSrc="/images/cards/card3.jpg"
            hoverSrc="/images/cards/card3b.jpg"
            width={206}
            height={284}
            alt="Bien-être"
          />
        </div>
      </div>
    </>
  );
}
