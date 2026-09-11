import Image from "next/image";
import Link from "next/link";

const universes = [
  {
    title: "Corporate & Occupational Health",
    subtitle: "Measure to improve employee well-being",
    text: "MASAK provides an objective assessment of stress, mental fatigue and vitality to identify key areas for action and support the prevention of psychosocial risks and musculoskeletal disorders within organizations.",
    href: "/pdf/2026/MASAK_entreprise_ENG.pdf",
  },
  {
    title: "Wellness Centers & Thermal Spas",
    subtitle: "Measure the benefits of your care programs",
    text: "MASAK helps teams design personalized care pathways tailored to each client's needs. Through assessments performed before and after the intervention, it objectively measures progress and demonstrates the benefits of the proposed treatments.",
    href: "/pdf/2026/MASAK-Wellness-ENG.pdf",
  },
  {
    title: "Sports Clubs & Federations",
    subtitle: "Measure to optimize athlete performance and well-being",
    text: "MASAK provides an objective assessment of physical fatigue, mental workload and musculoskeletal pain to identify opportunities for performance optimization and enable individualized athlete monitoring throughout the season.",
    href: "/pdf/2026/MASAK_sport-ENG.pdf",
  },
];

const awards = [
  {
    title: "Recognized by the French Ministry of Health and Labour",
    detail: "September 2025",
    image: "/images/masak/editorial2.jpg",
    alt: "Mental health — national cause",
  },
  {
    title:
      "Innovation Award for Scientific and Medical Research in Spas",
    detail: "October 2025",
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
            alt="MASAK device"
            className="mx-auto"
          />
          <Image
            src="/images/masak/ecran2.jpg"
            width={399}
            height={302}
            alt="MASAK screen"
            className="mx-auto"
          />
        </div>
      </section>

      <section>
        <p className="uppercase oswald text-4xl text-center">
          <span className="pr-2 font-semibold">A solution</span>
          <span className="font-light">serving three key markets</span>
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
                <Link
                  href={item.href}
                  target="_blank"
                  className="btn btn-blue cursor-pointer inline-block"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-24">
        <p className="uppercase oswald text-4xl text-center">
          <span className="pr-2 font-semibold">An award-winning</span>
          <span className="font-light">innovative solution</span>
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
        <Link href="/uk/contact" className="btn btn-blue oswald">
          Contact us
        </Link>
      </div>
    </div>
  );
}
