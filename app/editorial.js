import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const expertises = [
  {
    title: "Expertise santé",
    image: "/images/editorial1.jpg",
    text: "Nous conduisons des études cliniques portant sur l’évaluation de dispositifs médicaux, ainsi que des travaux de recherche sur la fatigue physique et mentale des professionnels de santé, notamment des chirurgiens et des personnels soignants.",
  },
  {
    title: "Expertise bien-être",
    image: "/images/editorial3.jpg",
    text: "Nous concevons des études pour évaluer les bénéfices de dispositifs et de programmes de soins sur le bien-être des personnes. Nous évaluons leurs effets notamment sur le stress, la qualité du sommeil, la fatigue mentale ou encore les douleurs, à partir d’une combinaison de mesures objectives et subjectives scientifiquement validées.",
  },
  {
    title: "Expertise sport",
    image: "/images/editorial2.jpg",
    text: "Nous mettons en œuvre des protocoles de recherche uniques afin d’évaluer l’impact de stratégies de récupération sur la performance des athlètes et la prévention des blessures, incluant notamment la cryothérapie, la compression, les infrarouges longs, la nutrition et l’hydratation.",
  },
];

const masakUniverses = [
  {
    title: "Entreprise & médecine du travail",
    text: "Le MASAK fournit une évaluation objective du stress, de la fatigue mentale et de la vitalité afin d'identifier les leviers d'action prioritaires et d'accompagner les démarches de prévention des risques psychosociaux (RPS) et des troubles musculo-squelettiques (TMS) au sein de votre organisation.",
    href: "/pdf/2026/MASAK_entreprise.pdf",
  },
  {
    title: "Centres de bien-être & thermalisme",
    text: "Le MASAK aide les équipes à construire un parcours de soins personnalisé, adapté aux besoins de chaque client. Grâce à une évaluation réalisée avant et après la prise en charge, il permet de mesurer les progrès accomplis et d'objectiver les bénéfices des soins proposés.",
    href: "/pdf/2026/MASAK_wellness.pdf",
  },
  {
    title: "Clubs & fédérations sportives",
    text: "Le MASAK fournit une évaluation objective de la fatigue physique, de la charge mentale et des douleurs musculaires afin d’identifier les leviers d’optimisation de la performance et d’assurer un suivi individualisé des athlètes tout au long de la saison.",
    href: "/pdf/2026/MASAK_sport.pdf",
  },
];

export default function Editorial() {
  return (
    <>
      <div className="pt-20 sm:pt-20 flex flex-col items-center justify-center">
        <div className="text-center px-10">
          <Fade
            direction="up"
            duration={1000}
            delay={1000}
            cascade
            damping={0.2}
            triggerOnce
          >
            <p className="font-semibold text-base uppercase blue">Recherche</p>
            <p className="font-light text-4xl pt-4 oswald uppercase max-w-4xl mx-auto">
              Centre d&apos;expertise scientifique dédié à la performance
              humaine et au bien-être
            </p>
            <p className="font-sm font-light pt-4 max-w-3xl text-center mx-auto">
              Nous testons et validons des dispositifs dans les domaines du
              sport, de la santé et du bien-être à travers une démarche
              scientifique rigoureuse allant de l’élaboration de protocoles à la
              valorisation des résultats sous forme de rapports ou de
              publications scientifiques.
            </p>
            <p className="font-sm font-light pt-4 max-w-3xl text-center mx-auto">
              &ldquo;Notre approche s’appuie sur plus de 30 ans d’expérience
              dans l’optimisation de la performance humaine, issue du sport de
              haut niveau et désormais appliquée à l’ensemble de ces
              domaines.&rdquo;
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 px-6 sm:px-10 max-w-6xl mx-auto">
          {expertises.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={145}
                height={108}
                className="mb-6"
              />
              <p className="font-semibold text-base uppercase blue pb-3">
                {item.title}
              </p>
              <span className="font-light">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/expertise" className="btn btn-blue oswald">
            En savoir +
          </Link>
        </div>
      </div>

      <div className="pt-24 pb-8 flex flex-col items-center justify-center">
        <div className="text-center px-10">
          <p className="font-light text-5xl oswald uppercase">MASAK</p>
          <p className="font-semibold text-lg blue pt-3 uppercase tracking-wide">
            Mental And Stress Assessment Kit
          </p>
          <p className="font-light text-3xl sm:text-4xl pt-8 oswald uppercase max-w-4xl mx-auto">
            La première méthode d’évaluation objective du bien-être mental et
            physique
          </p>
          <p className="font-light pt-6 max-w-3xl mx-auto">
            Après 7 années de Recherche &amp; Développement, nous avons mis au
            point la méthode MASAK (dispositif médical 2025) permettant
            d&apos;accéder à une lecture fine, objective et
            multidimensionnelle de l’état de bien-être de chacun, en
            s’appuyant sur des indicateurs scientifiquement validés.
          </p>
          <p className="font-light pt-4 max-w-3xl mx-auto">
            &ldquo;Le MASAK s’appuie sur 28 études scientifiques intégrant les
            domaines de la physiologie, de la psychologie et des
            neurosciences.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[900px] mx-auto pt-12 px-6">
          <Image
            src="/images/masak/masak-solution2.jpg"
            width={399}
            height={302}
            alt="Dispositif MASAK"
            className="mx-auto"
          />
          <Image
            src="/images/masak/ecran2.jpg"
            width={399}
            height={302}
            alt="Écran MASAK"
            className="mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-12 px-6">
          {masakUniverses.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border-2 border-[#4DB4C4] p-8 bg-white"
            >
              <p className="text-base font-semibold leading-7 blue uppercase">
                {item.title}
              </p>
              <p className="font-light pt-4 text-sm leading-6 flex-1">
                {item.text}
              </p>
              <div className="pt-8">
                <Link
                  href={item.href}
                  target="_blank"
                  className="btn btn-blue cursor-pointer inline-block"
                >
                  En savoir +
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/masak" className="btn btn-blue oswald">
            Découvrez le MASAK
          </Link>
        </div>
      </div>
    </>
  );
}
