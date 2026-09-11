import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const expertises = [
  {
    title: "Healthcare Expertise",
    image: "/images/editorial1.jpg",
    text: "We conduct clinical studies evaluating medical devices, as well as research projects investigating the physical and mental fatigue of healthcare professionals, including surgeons and nursing staff.",
  },
  {
    title: "Wellness Expertise",
    image: "/images/editorial3.jpg",
    text: "We design studies to assess the benefits of wellness interventions and care programs. Their effects are evaluated on key outcomes such as stress, sleep quality, mental fatigue and pain using a combination of scientifically validated objective and subjective measures.",
  },
  {
    title: "Sports Expertise",
    image: "/images/editorial2.jpg",
    text: "We develop and implement innovative research protocols to evaluate the impact of recovery strategies on athletic performance and injury prevention, including cryotherapy, compression therapy, far-infrared technologies, nutrition and hydration.",
  },
];

const masakUniverses = [
  {
    title: "Corporate & Occupational Health",
    text: "MASAK provides an objective assessment of stress, mental fatigue and vitality to identify key areas for improvement and support the prevention of psychosocial risks and musculoskeletal disorders within organizations.",
    href: "/pdf/2026/MASAK_entreprise_ENG.pdf",
  },
  {
    title: "Wellness Centers & Thermal Spas",
    text: "MASAK enables practitioners to build personalized care pathways tailored to each client's needs. By comparing assessments performed before and after the intervention, it objectively measures individual progress and demonstrates the benefits of the care provided.",
    href: "/pdf/2026/MASAK-Wellness-ENG.pdf",
  },
  {
    title: "Sports Clubs & Federations",
    text: "MASAK provides an objective assessment of physical fatigue, mental workload and musculoskeletal pain to identify opportunities for performance optimization and support individualized athlete monitoring throughout the season.",
    href: "/pdf/2026/MASAK_sport-ENG.pdf",
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
            <p className="font-semibold text-base uppercase blue">Research</p>
            <p className="font-light text-4xl pt-4 oswald uppercase max-w-4xl mx-auto">
              Scientific Expertise Center for Human Performance and Well-being
            </p>
            <p className="font-sm font-light pt-4 max-w-3xl text-center mx-auto">
              We design, test and validate solutions across sport, healthcare
              and wellness through a rigorous scientific approach, from protocol
              development to the dissemination of results in the form of white
              papers and peer-reviewed scientific publications.
            </p>
            <p className="font-sm font-light pt-4 max-w-3xl text-center mx-auto">
              &ldquo;Our approach builds on more than 30 years of experience in
              optimizing human performance, originally developed in elite sport
              and now applied across healthcare, wellness and occupational
              health.&rdquo;
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
          <Link href="/uk/expertise" className="btn btn-blue oswald">
            Learn more
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
            The first objective assessment method for mental and physical
            well-being
          </p>
          <p className="font-light pt-6 max-w-3xl mx-auto">
            Following seven years of research and development, we created MASAK
            (Medical Device, 2025), an innovative assessment method providing an
            objective, multidimensional evaluation of individual well-being
            based on scientifically validated indicators.
          </p>
          <p className="font-light pt-4 max-w-3xl mx-auto">
            &ldquo;MASAK is built upon 28 scientific studies spanning
            physiology, psychology and neuroscience.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[900px] mx-auto pt-12 px-6">
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
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/uk/masak" className="btn btn-blue oswald">
            Discover MASAK
          </Link>
        </div>
      </div>
    </>
  );
}
