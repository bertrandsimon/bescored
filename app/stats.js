"use client";
import Image from "next/image";
import { Fragment } from "react";
// import AnimatedNumbers from "react-animated-numbers";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

import { useState } from "react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      name: "Publications scientifiques internationales",
      value: "+ de 300",
    },
    { id: 2, name: "d experience", value: "+ de 30 ans" },
    {
      id: 3,
      name: "évaluations (Athletes, chefs d entreprise, chirurgiens)",
      value: "1500",
    },
  ];

  const [num, setNum] = useState(331231);

  return (
    <>
      <div className="bg-gray-900 py-24 sm:py-32 mt-14 mb-14 rounded-xl bg-[url('/images/stats-bg.jpg')] bg-cover bg-center">
        <div className="mx-auto w-full ">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">
                Publications scientifiques internationales
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl mx-auto">
                <AnimatedNumbers
                  animateToNumber="300"
                  fontStyle={{ fontSize: 50 }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">
                Ans d&apos;expérience
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl mx-auto">
                <AnimatedNumbers
                  animateToNumber="30"
                  fontStyle={{ fontSize: 50 }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">
                Evaluations (Athletes, chefs d&apos;entreprise, chirurgiens)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl mx-auto">
                <AnimatedNumbers
                  animateToNumber="1500"
                  fontStyle={{ fontSize: 50 }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* <div className="bg-gray-900 py-24 sm:py-32 mt-14 mb-14 rounded-xl bg-[url('/images/stats-bg.jpg')] bg-cover bg-center">
          <div className="mx-auto w-full ">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-white">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
      </div> */}
    </>
  );
}
