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
              beScored, accélérateur de performance et de bien-être
            </p>
            <p className="font-light text-4xl pt-4 oswald uppercase">
              Nous évaluons les potentiels, nous révélons les bénéfices <br />{" "}
              et nous optimisons les différentes recommandations.{" "}
            </p>
            <p className="font-sm font-light pt-4 max-w-2xl text-center mx-auto">
              &ldquo;Fort de plus de 30 ans d&apos;expérience dans
              l&apos;optimisation de la performance sportive de haut niveau,
              beScored propose également cette expertise dans les domaines de la
              santé, du bien-être et de l&apos;entreprise.&rdquo;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-24 sm:py-32m mt-24">
        <div className="flex justify-center items-center text-center text-white py-12 font-light text-4xl pt-4 oswald uppercase">
          <span>Nos études de cas par domaine d&apos;expertise </span>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Expertise santé</span>
              <Link href="/pdf/Etude de cas_Sante_beScored.pdf" target="_blank">
                <button className="btn btn-blue cursor-pointer text-xs">
                  Voir l&apos;étude
                </button>
              </Link>
            </div>
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Expertise Sport</span>
              <Link href="/pdf/Etude de cas_Sport_beScored.pdf" target="_blank">
                <button className="btn btn-blue cursor-pointer text-xs">
                  Voir l&apos;étude
                </button>
              </Link>
            </div>
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Expertise bien-être</span>
              <Link
                href="/pdf/Etude de cas_Bien-etre_beScored.pdf"
                target="_blank"
              >
                <button className="btn btn-blue cursor-pointer text-xs">
                  Voir l&apos;étude
                </button>
              </Link>
            </div>
            <div className="bg-white/5 p-8 sm:p-10 flex flex-col justify-center items-center text-white text-lg uppercase gap-4 text-center">
              <DocumentChartBarIcon className="h-10 w-10 text-white" />
              <span>Expertise corporate</span>
              <Link
                href="/pdf/Etude de cas_Corporate_beScored.png"
                target="_blank"
              >
                <button className="btn btn-blue cursor-pointer text-xs">
                  Voir l&apos;étude
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
