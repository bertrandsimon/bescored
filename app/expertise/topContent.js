import Link from "next/link";
import {
  EyeDropperIcon,
  BoltIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function TopContent() {
  return (
    <div className="pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center pt-20">
          <p className="font-semibold text-lg blue">
            Activités et expertises scientifiques
          </p>
          <p className="font-light text-4xl pt-4 oswald uppercase">
            beScored se positionne au cœur de l&apos;évaluation <br /> de la
            performance humaine
          </p>
          <p className="font-sm font-light pt-4 max-w-3xl mx-auto text-center">
            &ldquo;Notre approche scientifique repose sur plus de 30 ans
            d&apos;expérience dans l&apos;évaluation de la performance. Chaque
            étude est conçue sur mesure, selon des protocoles rigoureux, afin de
            produire des résultats fiables, exploitables et adaptés aux
            objectifs de nos partenaires.&rdquo;
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <EyeDropperIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Expertise santé
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black font-light">
                Nous conduisons des études cliniques portant sur l&apos;évaluation
                de dispositifs médicaux, ainsi que des travaux de recherche sur
                la fatigue physique et mentale des professionnels de santé,
                notamment des chirurgiens et des personnels soignants.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <MoonIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Expertise bien-être
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black font-light">
                Nous concevons des études de validation de l&apos;impact de
                dispositifs et de programmes de soins sur le bien-être des
                personnes. Nous évaluons leurs effets notamment sur le stress,
                la qualité du sommeil, la fatigue mentale ou encore les
                douleurs, à partir d&apos;une combinaison de mesures objectives
                et subjectives scientifiquement validées.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <BoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Expertise sport
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black font-light">
                Nous mettons en œuvre des protocoles de recherche originaux pour
                évaluer l&apos;impact de stratégies de récupération sur la
                performance des athlètes et la prévention des blessures,
                incluant notamment la cryothérapie, la compression, les
                infrarouges longs, la nutrition et l&apos;hydratation.
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center pt-16">
          <Link href="/cases">
            <button className="btn btn-blue oswald cursor-pointer">
              Exemple d&apos;études
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
