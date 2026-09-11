import Image from "next/image";

const founders = [
  {
    name: "Dr. Christophe Hausswirth, PhD, HDR",
    role: "CEO",
    image: "/images/team/chris.jpg",
    bio: "Founder and CEO of beScored, Christophe leads the strategic vision for MASAK, with the ambition of transforming the assessment of mental and physical well-being through an integrated scientific and technological approach. Associate member of Université Bourgogne Europe and Université Côte d’Azur, and Adjunct Professor at the University of Technology Sydney (Australia), he brings more than 20 years of experience leading the Research Department at INSEP, where he supported athletes across six Olympic Games. Today, he leverages his extensive international network to accelerate the development and global reach of MASAK.",
  },
  {
    name: "Dr. Alexandre Coste, PhD",
    role: "CTO",
    image: "/images/team/3.jpg",
    bio: "PhD in Human Movement Sciences, Alexandre has developed extensive expertise in the ergonomic evaluation of medical devices, integrating biomechanical, neurophysiological, and cognitive approaches. As CTO, he oversees MASAK’s technological development, ensuring the optimal integration of scientific advances and software innovations to deliver a reliable and high-performance solution.",
  },
  {
    name: "Dr. Geoffrey Millour, PhD",
    role: "COO",
    image: "/images/team/2.jpg",
    bio: "PhD in Sport Sciences and External Member of the MIP Laboratory (Nantes Université), Geoffrey is recognized for his expertise in elite sport, particularly in physiological and biomechanical performance analysis. He now focuses his research on optimizing innovative approaches that promote holistic well-being. He leads all scientific studies conducted within beScored, which directly contribute to the ongoing development of MASAK.",
  },
];

export default function Solo() {
  return (
    <div className="mt-14 mb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <p className="uppercase oswald text-3xl sm:text-4xl font-light leading-snug">
            Experts at your service to support you in your projects.
          </p>
          <p className="mt-6 text-light text-lg leading-8">
            A founding team of three researchers in sport and health sciences,
            combining scientific expertise with strategic, technological, and
            operational leadership.
          </p>
        </div>

        <div className="flex flex-col gap-16 pt-16">
          {founders.map((person) => (
            <div
              key={person.name}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-8"
            >
              <div className="h-48 w-48 shrink-0 rounded-full overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name} ({person.role})
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
