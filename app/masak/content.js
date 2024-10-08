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
          <p className="uppercase oswald text-4xl text-center ">
            <span className="pr-2 font-semibold">le problème</span>
            {/* <span className="font-light">à résoudre</span> */}
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
                  évaluation
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problème :</span>
                    <span>
                      Difficulté à évaluer de manière précise et holistique
                      l’état de forme physique et mental des personnes. Les
                      méthodes traditionnelles reposent souvent sur des
                      questionnaires et manquent de données objectives.
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Conséquences :</span>
                    <span>
                      risque de biais important pouvant entraîner une
                      sous-estimation ou une surestimation des problèmes de
                      santé mentale.
                    </span>
                  </div>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 blue uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                    <span className="text-white">2</span>
                  </div>
                  Détection santé mentale
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problème :</span>
                    <span>
                      Difficulté à détecter les problèmes de santé mentale
                      (e.g., syndrome d’ épuisement professionnel) de manière
                      précoce.
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Conséquences :</span>
                    <span>
                      retard dans la prise en charge, entraînant une
                      augmentation des coûts de santé et une diminution de la
                      qualité de vie et de la productivité au travail des
                      personnes concernées.
                    </span>
                  </div>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 blue uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                    <span className="text-white">3</span>
                  </div>
                  <p>Outils d&apos;évaluation</p>
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problème :</span>
                    <span>
                      Accès limité à des outils d&apos;évaluation simples et
                      rapides pour objectiver l’état de bien-être physique et
                      mental des personnes, ou pour quantifier les bénéfices
                      réels liés à un parcours de soins spécifique (par ex. une
                      cure thermale ou un parcours de soins en
                      thalassothérapie).
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Conséquences :</span>
                    <span>
                      difficulté à individualiser la prise en charge et à
                      mesurer les bénéfices réels de l’offre de soins.
                    </span>
                  </div>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 blue uppercase">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                    <span className="text-white">4</span>
                  </div>
                  <p>Suivi de l&apos;état de forme</p>
                </dt>
                <dd className="mt-2 text-sm leading-7 text-black flex flex-col divide-y gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Problème :</span>
                    <p>
                      Difficulté à assurer un suivi régulier de l&apos;état de
                      forme physique (incluant le niveau de douleurs) et mental.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold pt-4">Conséquences :</span>
                    <span>retard dans la prise en charge</span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="top2">
          <p className="uppercase oswald text-4xl text-center ">
            <span className="pr-2 font-semibold">la solution</span>
            <span className="font-light">MASAK</span>
          </p>

          <div className="flex justify-center ">
            <p className="font-light pt-4 max-w-[800px] tracking-tight">
              Un kit d’évaluation complet pour évaluer l’état mental (fatigue
              mentale, qualité cérébrale), les niveaux de douleurs et de stress,
              ainsi que la qualité de sommeil des personnes.
            </p>
          </div>
        </section>

        <section id="solution">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[800px] py-10">
            <div className="flex flex-col items-start justify-center">
              <p className="text-base font-semibold leading-7 blue uppercase pb-4">
                Kit d’évaluation
              </p>
              <p className="font-light tracking-tight text-justify">
                Un kit d’évaluation complet pour évaluer l’état mental (fatigue
                mentale, qualité cérébrale), les niveaux de douleurs et de
                stress, ainsi que la qualité de sommeil des personnes.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/masak/masak-solution.jpg"
                width="264"
                height="207"
                alt="screen"
              />
            </div>
          </div>
        </section>

        <section id="ecran">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[800px] py-10">
            <div className="flex items-center justify-center">
              <Image
                src="/images/masak/ecran.jpg"
                width="264"
                height="207"
                alt="screen"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <p className="text-base font-semibold leading-7 blue uppercase pb-4">
                Exemple de bilan “Forme & Bien-être”
              </p>
              <ul className="list-disc pl-6 font-light tracking-tight text-justify">
                <li>Fruit de plus de cinq années de R&D.</li>
                <li>
                  Un scoring intelligent pour chaque indice, alimenté par un
                  puissant algorithme.
                </li>
                <li>
                  Plus de 118 000 données agrégées, issues de la littérature et
                  de nos études, définissent les valeurs normatives couvrant les
                  deux sexes de 18 à 85 ans.
                </li>
                <li>Innovation 100% machine learning évolutive.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-10">
          <button className="btn btn-blue oswald">
            <Link href="/contact">contactez-nous !</Link>
          </button>
        </div>
      </div>
    </>
  );
}
