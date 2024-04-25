import Image from "next/image";
import { Fragment } from "react";
import { DocumentChartBarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Content() {
  return (
    <>
      <div className="pt-20 sm:pt-20 flex flex-col items-center justify-center">
        <div>
          <div className="text-center px-10">
            <p className="font-semibold text-base uppercase blue">
              beScored, performance and well-being accelerator
            </p>
            <p className="font-light text-4xl pt-4 oswald uppercase">
              We assess potentials, reveal benefits <br /> and optimize various
              recommendations.{" "}
            </p>
            <p className="font-sm font-light pt-4 max-w-2xl text-center mx-auto">
              &ldquo;With over 30 years of experience in optimizing high-level
              sports performance, beScored also offers this expertise in the
              fields of health, well-being, and business.&rdquo;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-24 sm:py-32m mt-24">
        <div className="flex justify-center items-center text-center text-white py-12 font-light text-4xl pt-4 oswald uppercase">
          <span>Our case studies by area of expertise</span>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Health expertise</span>
              <Link
                href="/uk/pdf/Case_Study_Health_beScored.pdf"
                target="_blank"
              >
                <button className="btn btn-blue cursor-pointer text-xs">
                  See study
                </button>
              </Link>
            </div>
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Sports expertise</span>
              <Link
                href="/uk/pdf/Case_Study_Sports_beScored.pdf"
                target="_blank"
              >
                <button className="btn btn-blue cursor-pointer text-xs">
                  See study
                </button>
              </Link>
            </div>
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Wellness expertise</span>
              <Link
                href="/pdf/Case_Study_Wellness_beScored.pdf"
                target="_blank"
              >
                <button className="btn btn-blue cursor-pointer text-xs">
                  See study
                </button>
              </Link>
            </div>
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Corporate expertise</span>
              <Link href="/uk/pdf/Case_Corporate_beScored.pdf" target="_blank">
                <button className="btn btn-blue cursor-pointer text-xs">
                  See study
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
