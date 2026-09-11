import Image from "next/image";

const founders = [
  {
    name: "Dr. Christophe Hausswirth, PhD, HDR",
    role: "CEO",
    image: "/images/team/chris.jpg",
    bio: "Fondateur et dirigeant de beScored, Christophe porte une vision stratégique ambitieuse avec l’objectif de transformer durablement l’évaluation du bien-être mental et physique grâce à une approche scientifique et technologique intégrée. Membre associé à l’Université Bourgogne Europe, à l’Université de Côte d’Azur, et adjunct Professor à l’Université Technologique de Sydney (Australie) et fort de 20 ans d’expérience à la tête du département Recherche de l’INSEP, où il a accompagné six Jeux Olympiques, il mobilise aujourd’hui son important réseau international pour accélérer le développement et le rayonnement de beScored et du MASAK.",
  },
  {
    name: "Dr. Alexandre Coste, PhD",
    role: "CTO",
    image: "/images/team/3.jpg",
    bio: "Docteur en sciences du mouvement humain, Alexandre a développé une expertise pointue dans l’évaluation ergonomique des dispositifs médicaux, intégrant les dimensions biomécaniques, neurophysiologiques et cognitives. En tant que CTO, il supervise les développements technologiques au sein de beScored et notamment du MASAK.",
  },
  {
    name: "Dr. Geoffrey Millour, PhD",
    role: "COO",
    image: "/images/team/2.jpg",
    bio: "Docteur en sciences du sport et membre externe du laboratoire MIP (Nantes Université), Geoffrey est reconnu pour son expertise dans le sport de haut niveau, en particulier dans l’analyse physiologique et biomécanique de la performance. Il consacre désormais ses travaux à l’optimisation des approches innovantes favorisant le bien-être global. Il pilote l’ensemble des études scientifiques menées au sein de beScored, qui alimentent directement le développement du MASAK.",
  },
];

export default function Solo() {
  return (
    <div className="mt-14 mb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <p className="uppercase oswald text-3xl sm:text-4xl font-light leading-snug">
            Des experts à votre écoute pour vous accompagner dans vos projets.
          </p>
          <p className="mt-6 text-light text-lg leading-8">
            Une équipe fondatrice soudée portée par trois chercheurs en sciences
            du sport et de la santé pour piloter stratégie, tech et opérations
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
