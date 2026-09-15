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
  fluid = false,
}) {
  const [hovered, setHovered] = useState(false);

  const images = (
    <div
      className="relative overflow-hidden rounded-xl drop-shadow-lg w-full"
      style={
        fluid
          ? { aspectRatio: `${width} / ${height}` }
          : { width, height }
      }
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

      <div className="hidden sm:grid grid-cols-12 px-2 gap-2 justify-between">
        <div className="col-span-12 lg:col-span-5 md:col-span-12">
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
                  Tirer le meilleur de vos dispositifs ou de vos collaborateurs
                  est notre priorité“
                </p>
              </Slide>
              <Slide direction="up" duration={500} delay={1200} triggerOnce>
                <Image
                  className="pt-8 w-auto"
                  src="/images/signature.jpg"
                  width={252}
                  height={90}
                  alt="Signature"
                />
              </Slide>
            </Fade>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 flex flex-row gap-2 sm:gap-6 justify-end">
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
      <div className="sm:hidden px-4">
        <div className="grid grid-cols-2 gap-3 max-w-[400px] mx-auto">
          <HoverCard
            href="/expertise"
            initialSrc="/images/cards/card1.jpg"
            hoverSrc="/images/cards/card1b.jpg"
            width={206}
            height={284}
            alt="Santé"
            fluid
          />
          <HoverCard
            href="/expertise"
            initialSrc="/images/cards/card2.jpg"
            hoverSrc="/images/cards/card2b.jpg"
            width={206}
            height={284}
            alt="Sport"
            fluid
          />
          <div className="col-span-2 flex justify-center">
            <div className="w-[calc(50%-6px)]">
              <HoverCard
                href="/expertise"
                initialSrc="/images/cards/card3.jpg"
                hoverSrc="/images/cards/card3b.jpg"
                width={206}
                height={284}
                alt="Bien-être"
                fluid
              />
            </div>
          </div>
        </div>
        <div className="pt-10 px-2">
          <p className="font-light italic text-[15px] leading-6">
            “Après 6 jeux olympiques où j&apos;ai dirigé les recherches pour
            nos athlètes à l&rsquo;Institut National du Sport (INSEP), j’ai
            fondé beScored Institute.
            <br />
            <br />
            Tirer le meilleur de vos dispositifs ou de vos collaborateurs est
            notre priorité“
          </p>
          <Image
            className="pt-6 w-[180px] h-auto"
            src="/images/signature.jpg"
            width={252}
            height={90}
            alt="Signature"
          />
        </div>
      </div>
    </>
  );
}
