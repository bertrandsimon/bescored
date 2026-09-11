import Image from "next/image";
import Link from "next/link";

const universes = [
  {
    title: "Entreprises & médecine du travail",
    subtitle: "Mesurer pour agir sur le bien-être de vos collaborateurs",
    text: "Le MASAK fournit une évaluation objective du stress, de la fatigue mentale et de la vitalité afin d'identifier les leviers d'action prioritaires et d'accompagner les démarches de prévention des RPS et TMS au sein de votre organisation.",
    href: "/pdf/2026/MASAK_entreprise.pdf",
  },
  {
    title: "Centres de bien-être & thermalisme",
    subtitle: "Mesurer les bénéfices de vos parcours de soin",
    text: "Le MASAK aide les équipes à construire un parcours de soins personnalisé, adapté aux besoins de chaque client. Grâce à une évaluation réalisée avant et après la prise en charge, il permet de mesurer les progrès accomplis et d'objectiver les bénéfices des soins proposés.",
    href: "/pdf/2026/MASAK_wellness.pdf",
  },
  {
    title: "Clubs & fédérations sportives",
    subtitle:
      "Mesurer pour optimiser la performance et le bien-être des athlètes",
    text: "Le MASAK fournit une évaluation objective de la fatigue physique, de la charge mentale et des douleurs musculaires afin d’identifier les leviers d’optimisation de la performance et d’assurer un suivi individualisé des athlètes tout au long de la saison.",
    href: "/pdf/2026/MASAK_sport.pdf",
  },
];

const awards = [
  {
    title: "Labellisation par le Ministère du Travail et de la Santé",
    detail: "septembre 2025",
    image: "/images/masak/editorial2.jpg",
    alt: "Parlons santé mentale — Grande cause nationale",
  },
  {
    title:
      "Prix de l’innovation de la recherche scientifique et médicale dans les SPA",
    detail: "octobre 2025",
    image: "/images/masak/innovation.jpg",
    alt: "ESPA Innovation Awards",
  },
];

export default function Content() {
  return (
    <div className="py-16 px-6 sm:px-10 mx-auto">
      <section className="max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[900px] mx-auto pb-16">
          <Image
            src="/images/masak/masak-solution2.jpg"
            width={399}
            height={302}
            alt="Solution MASAK"
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
      </section>

      <section>
        <p className="uppercase oswald text-4xl text-center">
          <span className="pr-2 font-semibold">Une solution</span>
          <span className="font-light">au service de 3 univers</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-12">
          {universes.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border-2 border-[#4DB4C4] p-8 bg-white"
            >
              <p className="text-base font-semibold leading-7 blue uppercase">
                {item.title}
              </p>
              <p className="font-semibold pt-3">{item.subtitle}</p>
              <p className="font-light pt-4 text-sm leading-6 flex-1">
                {item.text}
              </p>
              <div className="pt-8">
                <Link href={item.href} target="_blank">
                  <button className="btn btn-blue cursor-pointer">
                    En savoir +
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-24">
        <p className="uppercase oswald text-4xl text-center">
          <span className="pr-2 font-semibold">Une solution</span>
          <span className="font-light">innovante récompensée</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-12">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col items-center text-center rounded-xl border-2 border-[#4DB4C4] bg-white p-8"
            >
              <Image
                src={award.image}
                alt={award.alt}
                width={280}
                height={180}
                className="h-40 w-auto object-contain"
              />
              <p className="oswald uppercase text-lg blue leading-snug pt-6">
                {award.title}
              </p>
              <p className="font-light pt-2 text-sm">{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center pt-16">
        <button className="btn btn-blue oswald">
          <Link href="/contact">contactez-nous !</Link>
        </button>
      </div>
    </div>
  );
}
