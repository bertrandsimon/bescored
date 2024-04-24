import Image from "next/image";
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

export default function TopContent() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center pt-20">
          <p className="font-semibold text-lg blue">
            Activités et expertises scientifiques
          </p>
          <p className="font-light text-4xl pt-4 oswald uppercase">
            beScored se positionne au coeur des facteurs <br /> de la
            performance humaine
          </p>
          <p className="font-sm font-extralight pt-4 max-w-xl mx-auto text-center">
            Les expertises et programmes de recherche menés par beScored, allant
            de la validation de dispositifs jusqu’à l’utilisation de matériel,
            s’adressent aux entreprises désireuses d’en observer les réelles
            applications dans le monde du sport, du bien-être et de la santé.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration avec : </span>
                  <span className="font-semibold pl-2">JOHNSON & JOHNSON</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Objectif principal :
                  </span>
                  <span>
                    mesurer les états de fatigue des chirurgiens orthopédiques
                    qui utilisent des dispositifs automatisés ou conventionnels
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Résultats majeurs :
                  </span>
                  <span>
                    la fatigue cognitive et physique sont diminuées par
                    l’utilisation d’un automate utilisé en arthroplastie de la
                    hanche.
                  </span>
                </div>
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <MoonIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Expertise bien-être
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration avec : </span>
                  <span className="font-semibold pl-2">LPG Medical</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Objectif principal :
                  </span>
                  <span>
                    proposer un programme de soins qui permet d’améliorer la
                    qualité de sommeil, de diminuer le stress et de booster les
                    défenses immunitaires.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Résultats majeurs :
                  </span>
                  <span>
                    à l’issue d’un programme de 10 séances, le sommeil des
                    personnes est moins fragmenté et elles restent plus
                    longtemps immobiles dans leur sommeil, le stress est diminué
                    et la vitalité augmentée dans le groupe expérimental, et ce
                    en comparaison avec le groupe Placebo.
                  </span>
                </div>
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <BoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Expertise sport
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration avec : </span>
                  <span className="font-semibold pl-2"> INFRACAB’IN</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Objectif principal :
                  </span>
                  <span>
                    favoriser une amélioration de la récupération en sport par
                    l’utilisation régulière d’un dispositif infrarouges de
                    dernière génération.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Résultats majeurs :
                  </span>
                  <span>
                    à l’issue d’un exercice générant de fortes courbatures, les
                    paramètres de force et de détente sont moins altérés lorsque
                    les sportifs effectuent chaque jour une récupération en
                    sauna infrarouges.
                  </span>
                </div>
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 blue uppercase">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <BuildingOfficeIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Expertise corporate
              </dt>
              <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                <div className="flex">
                  <span>Collaboration avec : </span>
                  <span className="font-semibold pl-2">CERBALLIANCE</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Objectif principal :
                  </span>
                  <span>
                    mettre en œuvre une évaluation de la santé mentale en
                    entreprise afin de cibler les axes d’amélioration.
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold pt-4">
                    Résultats majeurs :
                  </span>
                  <span>
                    la fatigue mentale est l’un des paramètres les plus
                    pertinents pour tenir compte du bien-être des salariés en
                    entreprise. Nous sommes désormais en mesure de donner un
                    score objectif à cette notion souvent subjective.
                  </span>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
