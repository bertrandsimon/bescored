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
      className="relative overflow-hidden rounded-xl drop-shadow-lg pointer-events-none w-full"
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
      <div className="absolute bottom-[10px] right-[6px] bg-white pl-2 pr-0.5">
        <p className="oswald uppercase text-black text-[11px] leading-none tracking-wide">
          Learn more
        </p>
      </div>
    </div>
  );

  return (
    <Link
      href={href}
      className="block cursor-pointer relative z-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {withAtropos ? (
        <Atropos
          className="my-atropos cursor-pointer"
          shadow={false}
          highlight={true}
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
        <link rel="preload" href="/images/cards/card1b-uk.jpg" as="image" />
        <link rel="preload" href="/images/cards/card2b-uk.jpg" as="image" />
        <link rel="preload" href="/images/cards/card3b-uk.jpg" as="image" />
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
                  “After 6 Olympic Games where I led research for our athletes
                  at the National Institute of Sport (INSEP), I founded beScored
                  Institute. <br />
                  <br />
                  Extracting the best from your devices or your collaborators is
                  our priority.“
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
                href="/uk/expertise"
                initialSrc="/images/cards/card1-uk.jpg"
                hoverSrc="/images/cards/card1b-uk.jpg"
                width={206}
                height={284}
                alt="Healthcare"
                withAtropos
              />
            </Slide>

            <Slide direction="right" duration={500} delay={1200} triggerOnce>
              <HoverCard
                href="/uk/expertise"
                initialSrc="/images/cards/card2-uk.jpg"
                hoverSrc="/images/cards/card2b-uk.jpg"
                width={206}
                height={284}
                alt="Sport"
                withAtropos
              />
            </Slide>

            <Slide direction="right" duration={500} delay={1400} triggerOnce>
              <HoverCard
                href="/uk/expertise"
                initialSrc="/images/cards/card3-uk.jpg"
                hoverSrc="/images/cards/card3b-uk.jpg"
                width={206}
                height={284}
                alt="Wellness"
                withAtropos
              />
            </Slide>
          </Fade>
        </div>
      </div>

      <div className="sm:hidden px-4">
        <div className="grid grid-cols-2 gap-3 max-w-[400px] mx-auto">
          <HoverCard
            href="/uk/expertise"
            initialSrc="/images/cards/card1-uk.jpg"
            hoverSrc="/images/cards/card1b-uk.jpg"
            width={206}
            height={284}
            alt="Healthcare"
            fluid
          />
          <HoverCard
            href="/uk/expertise"
            initialSrc="/images/cards/card2-uk.jpg"
            hoverSrc="/images/cards/card2b-uk.jpg"
            width={206}
            height={284}
            alt="Sport"
            fluid
          />
          <div className="col-span-2 flex justify-center">
            <div className="w-[calc(50%-6px)]">
              <HoverCard
                href="/uk/expertise"
                initialSrc="/images/cards/card3-uk.jpg"
                hoverSrc="/images/cards/card3b-uk.jpg"
                width={206}
                height={284}
                alt="Wellness"
                fluid
              />
            </div>
          </div>
        </div>
        <div className="pt-10 px-2">
          <p className="font-light italic text-[15px] leading-6">
            “After 6 Olympic Games where I led research for our athletes at the
            National Institute of Sport (INSEP), I founded beScored Institute.
            <br />
            <br />
            Extracting the best from your devices or your collaborators is our
            priority.“
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
