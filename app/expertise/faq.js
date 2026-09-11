import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function Faq() {
  const faqs = [
    {
      question: "Comment savoir si mon dispositif apporte des bénéfices ? ",
      answer:
        "Nous sommes là pour vous aider à organiser les programmes d’évaluation nécessaires et mettre en œuvre tous les outils pour décrire au mieux d’éventuels bénéfices.",
    },
    {
      question:
        "Quel est le délai entre le lancement d'une étude et la remise du rapport final ?",
      answer:
        "La durée d'un projet est généralement d'environ 6 mois. Cette période comprend 3 à 4 mois consacrés à la réalisation des évaluations selon le protocole défini, puis 2 mois dédiés à l’exploitation des données et à la rédaction du rapport. Ce calendrier peut être adapté en fonction de la complexité du projet et des contraintes de recrutement des participants.",
    },
    {
      question:
        "Est-ce que le rapport final est délivré en plusieurs langues ?",
      answer:
        "Il est fourni de base en langue française mais il est également souvent réalisé en langue anglaise sur simple demande.",
    },
    {
      question:
        "Est-ce que vous aidez les entreprises à interpréter les résultats issus de vos tests ou de vos recherches ?",
      answer:
        "Oui, nous sommes présents à vos côtés même au-delà des simples résultats liés à notre évaluation. ",
    },
    {
      question:
        "Est-il possible de faire de simples tests au début pour cibler nos hypothèses et orienter les bénéfices liés à notre produit ?",
      answer: "Cela est tout à fait envisageable voire souvent recommandé. ",
    },
    {
      question:
        "J’ai un produit à tester dans le monde du sport : est-ce que vous vous chargez du recrutement des sportifs ?",
      answer:
        "Oui, nous faisons le recrutement et la pré-sélection en fonction des critères spécifiques et en accord avec votre produit et ses exigences.",
    },
  ];

  return (
    <div className="bg-gray-900 rounded-xl pb-40">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-32 lg:px-8 lg:py-14 ">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <p className="uppercase oswald text-4xl text-white text-center">
            <span className="pr-2 font-semibold">questions</span>
            <span className="font-light">fréquentes</span>
          </p>

          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
