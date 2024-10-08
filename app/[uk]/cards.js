import Image from "next/image";
import { useState } from "react";
import { Fragment } from "react";
import Head from "next/head";
import { Fade, Slide } from "react-awesome-reveal";
import Atropos from "atropos/react";
import "atropos/css";
import Link from "next/link";

function Card({ initialSrc, hoverSrc, width, height }) {
  const [src, setSrc] = useState(initialSrc);

  return (
    <div className="cursor-pointer">
      <Image
        priority
        className="w-auto rounded-xl drop-shadow-lg transition-opacity duration-500"
        src={src}
        width={width}
        height={height}
        alt="Card"
        onMouseEnter={() => setSrc(hoverSrc)}
        onMouseLeave={() => setSrc(initialSrc)}
      />
    </div>
  );
}

export default function Cards() {
  return (
    <>
      <Head>
        <link rel="preload" href="uk/images/cards/card1b-uk.jpg" as="image" />
        <link rel="preload" href="uk/images/cards/card2b-uk.jpg" as="image" />
        <link rel="preload" href="uk/images/cards/card3b-uk.jpg" as="image" />
        <link rel="preload" href="uk/images/cards/card4b-uk.jpg" as="image" />
      </Head>

      <div className="grid grid-cols-12 px-2 gap-2 justify-between">
        <div className="order-1 col-span-12 lg:col-span-3 md:col-span-12 md:order-2 ">
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
                  Extracting the best from your devices or your employees is our
                  priority.“
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

        {/* dektop */}
        <div className="hidden order-2 col-span-12 lg:col-span-9 sm:flex sm:flex-row gap-2 sm:gap-6 justify-end">
          <Fade duration={1000} delay={1000} cascade damping={0.2} triggerOnce>
            <Slide direction="right" duration={500} delay={1000} triggerOnce>
              <Atropos
                className="my-atropos cursor-pointer"
                shadow="false"
                shadowScale="0.7"
                shadowOffset="30"
                rotateXMax="30"
                rotateYMax="60"
                highlight="true"
              >
                <Link href="/uk/cases">
                  <Image
                    className="img1Card w-auto rounded-xl drop-shadow-lg object-cover"
                    src="/images/cards/card1-uk.jpg"
                    width={206}
                    height={284}
                    alt="atropos"
                  />
                </Link>
              </Atropos>
            </Slide>

            <Slide direction="right" duration={500} delay={1200} triggerOnce>
              <Atropos
                className="my-atropos cursor-pointer"
                shadow="false"
                shadowScale="0.7"
                shadowOffset="30"
                rotateXMax="30"
                rotateYMax="60"
                highlight="true"
              >
                <Link href="/uk/cases">
                  <Image
                    className="img2Card w-auto rounded-xl drop-shadow-lg "
                    src="/images/cards/card2-uk.jpg"
                    width={206}
                    height={284}
                    alt="atropos"
                  />
                </Link>
              </Atropos>
            </Slide>

            <Slide direction="right" duration={500} delay={1400} triggerOnce>
              <Atropos
                className="my-atropos cursor-pointer"
                shadow="false"
                shadowScale="0.7"
                shadowOffset="30"
                rotateXMax="30"
                rotateYMax="60"
                highlight="true"
              >
                <Link href="/uk/cases">
                  <Image
                    className="img3Card w-auto rounded-xl drop-shadow-lg"
                    src="/images/cards/card3-uk.jpg"
                    width={206}
                    height={284}
                    alt="atropos"
                  />
                </Link>
              </Atropos>
            </Slide>

            <Slide direction="right" duration={500} delay={1600} triggerOnce>
              <Atropos
                className="my-atropos cursor-pointer"
                shadow="false"
                shadowScale="0.7"
                shadowOffset="30"
                rotateXMax="30"
                rotateYMax="60"
                highlight="true"
              >
                <Link href="/uk/cases">
                  <Image
                    className="img4Card w-auto rounded-xl drop-shadow-lg"
                    src="/images/cards/card4-uk.jpg"
                    width={206}
                    height={284}
                    alt="atropos"
                  />
                </Link>
              </Atropos>
            </Slide>
          </Fade>
        </div>
      </div>

      {/* mobile */}
      <div className="flex justify-around items-center sm:hidden pt-10">
        <div className="grid grid-cols-2 gap-6">
          <Card
            initialSrc="/images/cards/card1-uk.jpg"
            hoverSrc="/images/cards/card1b-uk.jpg"
            width={206}
            height={284}
          />
          <Card
            initialSrc="/images/cards/card2-uk.jpg"
            hoverSrc="/images/cards/card2b-uk.jpg"
            width={206}
            height={239}
          />
          <Card
            initialSrc="/images/cards/card3-uk.jpg"
            hoverSrc="/images/cards/card3b-uk.jpg"
            width={206}
            height={284}
          />
          <Card
            initialSrc="/images/cards/card4-uk.jpg"
            hoverSrc="/images/cards/card4b-uk.jpg"
            width={206}
            height={284}
          />
        </div>
      </div>
    </>
  );
}
