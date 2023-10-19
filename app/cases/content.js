import Image from "next/image";
import { Fragment } from "react";

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
    </>
  );
}
