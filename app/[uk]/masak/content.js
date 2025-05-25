import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  EyeDropperIcon,
  BuildingOfficeIcon,
  BoltIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function Content() {
  return (
    <>
      <div className="py-10 px-10 mx-auto">
        <section id="top1">
          <p className="uppercase oswald text-4xl text-center pb-20 md:pb-0">
            <span className="pr-2 font-semibold">THE PROBLEM</span>
          </p>
        </section>

        <section id="probleme">
          <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl pb-20">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 blue uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                    <span className="text-white">1</span>
                  </div>
                  EVALUATION AND OBJECTIFICATION
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problem:</span>
                    <span>
                      There is a difficulty in accurately and holistically assessing physical and mental well-being. Traditional methods often rely on questionnaires and lack objective data.
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Consequences:</span>
                    <span>
                      Significant risk of bias, which can lead to the underestimation or overestimation of mental health issues.
                    </span>
                  </div>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 blue uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                    <span className="text-white">2</span>
                  </div>
                  DETECTION
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problem:</span>
                    <span>
                      There is difficulty in the early detection of mental health disorders (e.g. burnout syndrome).
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Consequences:</span>
                    <span>
                      Delayed care can result in increased healthcare costs, as well as reduced quality of life and productivity at work.
                    </span>
                  </div>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 blue uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                    <span className="text-white">3</span>
                  </div>
                  ASSESSMENT TOOLS
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problem:</span>
                    <span>
                      There is limited access to simple, quick evaluation tools that can objectively assess physical and mental well-being or quantify the actual benefits of specific care programmes (e.g. thermal spa treatment or thalassotherapy/spa programmes).
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Consequences:</span>
                    <span>
                      Difficulty in providing personalised care and measuring the actual benefits of treatment.
                    </span>
                  </div>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 blue uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                    <span className="text-white">4</span>
                  </div>
                  WELL-BEING MONITORING
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problem:</span>
                    <p>
                      Difficulty ensuring regular monitoring of physical and mental well-being (including pain levels).
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Consequences:</span>
                    <span>Delays in providing care.</span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="top2">
          <p className="uppercase oswald text-4xl text-center ">
            <span className="pr-2 font-semibold">THE MASAK</span>
            <span className="font-light">SOLUTION</span>
          </p>

          <div className="flex justify-center ">
            <p className="font-light pt-4 max-w-[800px] tracking-tight">
              A comprehensive assessment kit to evaluate mental state, including mental fatigue and cognitive performance, as well as pain, stress levels and sleep quality.
            </p>
          </div>
        </section>

        <section id="solution">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[800px] py-10">
            <div className="flex flex-col items-start justify-center">
              <p className="text-base font-semibold leading-7 blue uppercase pb-4">
                AN INNOVATIVE DIGITAL SOLUTION
              </p>
              <ul className="list-disc pl-6 font-light tracking-tight text-justify">
                <li>The result of over five years of R&D.</li>
                <li>
                  Intelligent scoring for each performance index, powered by a powerful AI algorithm.
                </li>
                <li>
                  Over 118,000 aggregated data points, drawn from literature and our own scientific studies, are used to define normative values for both sexes aged 18–85.
                </li>
                <li>100% machine learning–driven innovation.</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/masak/masak-solution2-uk.jpg"
                width="399"
                height="302"
                alt="screen"
              />
            </div>
          </div>
        </section>

        <section id="ecran">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[800px] py-10">
            <div className="flex items-center justify-center">
              <Image
                src="/images/masak/ecran2.jpg"
                width="527"
                height="415"
                alt="screen"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <p className="text-base font-semibold leading-7 blue uppercase pb-4">
                FULL HEALTH & WELL-BEING ASSESSMENT IN UNDER 20 MINUTES
              </p>
              <p className="font-light tracking-tight text-justify">
                A comprehensive assessment including a dozen cognitive, mental and vitality tests, with an immediate report.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-10">
          <button className="btn btn-blue oswald">
            <Link href="/contact">CONTACT US!</Link>
          </button>
        </div>
      </div>
    </>
  );
}
