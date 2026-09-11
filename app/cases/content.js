import Link from "next/link";

const studies = [
  {
    title: "Expertise santé",
    partner: "JOHNSON & JOHNSON",
    objective:
      "Mesurer les états de fatigue des chirurgiens orthopédiques qui utilisent des dispositifs automatisés ou conventionnels.",
    results:
      "L’utilisation d’un automate en arthroplastie de la hanche permet de réduire significativement la fatigue cognitive et physique des chirurgiens.",
    href: "https://doi.org/10.60118/001c.87622",
  },
  {
    title: "Expertise bien-être",
    partner: "LPG Medical",
    objective:
      "Proposer un programme de soins qui permet d’améliorer la qualité de sommeil, de diminuer le stress et de booster les défenses immunitaires.",
    results:
      "À l’issue d’un programme de 10 séances, le sommeil des personnes est moins fragmenté et elles restent plus longtemps immobiles pendant leur sommeil. De plus, le niveau de stress a diminué et la vitalité a augmenté dans le groupe expérimental, et ce en comparaison à un groupe Placebo (article in review)",
    href: "https://www.lpg-group.com/media/wysiwyg/PDF/Medical/Etudes/Bien-etre/20231031_Rapport_final_IC_LPG_FR.pdf",
  },
  {
    title: "Expertise sport",
    partner: "ORTHONOV",
    objective:
      "Évaluer les effets de séances de récupération avec la technologie CryoPush®, en comparaison à une récupération passive, après un exercice physique composé de sauts répétés ayant pour but d’induire une fatigue musculaire locale.",
    results:
      "Cette étude démontre l’efficacité du dispositif CryoPush® dans l’amélioration de la cinétique de récupération musculaire après un exercice intense et traumatisant. Une réduction significative de l’inflammation, de la fatigue et des douleurs musculaires a été observée, accompagnée d’une amélioration des performances lors des différents tests sportifs, notamment en termes de force musculaire isométrique des extenseurs du genou.",
    href: "https://doi.org/10.3389/fphys.2025.1598075",
  },
];

export default function Content() {
  return (
    <>
      <div className="pt-20 flex flex-col items-center justify-center">
        <div className="text-center px-10">
          <p className="font-semibold text-base uppercase blue">Études de cas</p>
          <p className="font-light text-4xl pt-4 oswald uppercase max-w-4xl mx-auto">
            White papers et publications illustrant notre démarche scientifique
          </p>
          <p className="font-sm font-light pt-4 max-w-3xl text-center mx-auto">
            &ldquo;Découvrez une sélection d’études dans nos différents domaines
            d’expertise illustrant notre démarche scientifique. Chaque projet
            donne lieu à un white paper détaillant la méthodologie et les
            principaux résultats. Lorsque les objectifs de l’étude et les
            résultats le permettent, ces travaux peuvent également faire l’objet
            de publications dans des revues scientifiques internationales.&rdquo;
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studies.map((study) => (
            <div
              key={study.title}
              className="flex flex-col rounded-xl border-2 border-[#4DB4C4] bg-white p-8"
            >
              <p className="text-base font-semibold leading-7 blue uppercase">
                {study.title}
              </p>
              <div className="mt-4 text-sm leading-7 text-black flex flex-col gap-4 flex-1">
                <p>
                  Collaboration avec :{" "}
                  <span className="font-semibold">{study.partner}</span>
                </p>
                <p>
                  <span className="font-semibold">Objectif principal : </span>
                  {study.objective}
                </p>
                <p>
                  <span className="font-semibold">Résultats majeurs : </span>
                  {study.results}
                </p>
              </div>
              <div className="pt-8">
                <Link href={study.href} target="_blank">
                  <button className="btn btn-blue cursor-pointer">
                    Voir l&apos;étude
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
