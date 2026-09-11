import Link from "next/link";

const studies = [
  {
    title: "Healthcare Expertise",
    partner: "JOHNSON & JOHNSON",
    objective:
      "To assess the physical and cognitive fatigue experienced by orthopedic surgeons using automated or conventional surgical devices.",
    results:
      "The use of an automated system during hip arthroplasty significantly reduces surgeons’ cognitive and physical fatigue.",
    href: "https://doi.org/10.60118/001c.87622",
  },
  {
    title: "Wellness Expertise",
    partner: "LPG Medical",
    objective:
      "To evaluate the impact of a care program designed to improve sleep quality, reduce stress and enhance overall vitality.",
    results:
      "Following a 10-session program, participants in the experimental group showed reduced sleep fragmentation and longer periods of immobility during sleep. In addition, stress levels decreased and vitality improved compared with a placebo group (article under review).",
    href: "https://www.lpg-group.com/media/wysiwyg/PDF/Medical/Etudes/Bien-etre/20231107_Rapport_final_IC_LPG_en_V3.pdf",
  },
  {
    title: "Sports Expertise",
    partner: "ORTHONOV",
    objective:
      "To evaluate the effects of recovery sessions using CryoPush® technology compared with passive recovery following intense physical exercise designed to induce localized muscle fatigue.",
    results:
      "This study demonstrates the effectiveness of CryoPush® in improving muscle recovery kinetics after intense and strenuous exercise. Significant reductions in inflammation, fatigue and muscle soreness were observed, alongside improved performance outcomes, including increased isometric knee extensor strength.",
    href: "https://doi.org/10.3389/fphys.2025.1598075",
  },
];

export default function Content() {
  return (
    <>
      <div className="pt-20 flex flex-col items-center justify-center">
        <div className="text-center px-10">
          <p className="font-semibold text-base uppercase blue">Case studies</p>
          <p className="font-light text-4xl pt-4 oswald uppercase max-w-4xl mx-auto">
            White papers and publications highlighting our scientific approach
          </p>
          <p className="font-sm font-light pt-4 max-w-3xl text-center mx-auto">
            &ldquo;Explore a selection of studies across our fields of
            expertise, illustrating our scientific approach. Each project
            results in a comprehensive white paper detailing the methodology,
            analyses and key findings. Depending on the objectives of the study
            and the outcomes obtained, some projects may also lead to
            publications in international peer-reviewed scientific
            journals.&rdquo;
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
                  Collaboration with:{" "}
                  <span className="font-semibold">{study.partner}</span>
                </p>
                <p>
                  <span className="font-semibold">Main objective: </span>
                  {study.objective}
                </p>
                <p>
                  <span className="font-semibold">Key findings: </span>
                  {study.results}
                </p>
              </div>
              <div className="pt-8">
                <Link
                  href={study.href}
                  target="_blank"
                  className="btn btn-blue cursor-pointer inline-block"
                >
                  Read the study
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-16">
          <Link href="/uk/contact" className="btn btn-blue oswald">
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
