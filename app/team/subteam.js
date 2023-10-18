import Image from "next/image";

export default function Subteam() {
  const people = [
    {
      name: "Dr. Cyril SCHMIT, PhD.",
      role: "Scientifique psycho-physiologiste",
      imageUrl: "/images/team/5.jpg",
    },
    {
      name: "Dr. François DUFOREZ, MD.",
      role: "Médecin clinicien du sommeil",
      imageUrl: "/images/team/6.jpg",
    },
    {
      name: "Dr. Anis ALOULOU, PhD.",
      role: "Scientifique du sport et du sommeil",
      imageUrl: "/images/team/7.jpg",
    },
    {
      name: "Prof. Damien Léger, PU-PH.",
      role: "Médecin du sommeil",
      imageUrl: "/images/team/8.jpg",
    },
    {
      name: "Prof. CY. Guezennec, MD., PhD.",
      role: "Médecin, Professeur agrégé de physiologie",
      imageUrl: "/images/team/9.jpg",
    },
    {
      name: "Prof. AX. BIGARD, MD., PhD.",
      role: "Médecin, Professeur agrégé du Val-de-Grâce",
      imageUrl: "/images/team/10.jpg",
    },
    {
      name: "Dr. Vincent RAIMONDI, MD., PhD.",
      role: "Médecin biologiste",
      imageUrl: "/images/team/11.jpg",
    },

    {
      name: "Dr. Eve TIOLLIER, PhD.",
      role: "Nutritionniste du sport",
      imageUrl: "/images/team/12.jpg",
    },
    {
      name: "Aurélien BROUSSAL-DERVAL",
      role: "Formateur et préparateur physique",
      imageUrl: "/images/team/13.jpg",
    },
    {
      name: "Dr. Edith PERREAUT-PIERRE, MD., PhD.",
      role: "Médecin du sport et préparation mentale",
      imageUrl: "/images/team/14.jpg",
    },
  ];

  return (
    <div className="my-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:mx-0 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <p className="uppercase oswald text-4xl ">
              <span className="pr-2 font-semibold">ils font aussi partie</span>
              <span className="font-light">de l équipe</span>
            </p>

            <p className="mt-6 text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              exercitationemuptas sunt ut.
            </p>
          </div>
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-24 w-24 rounded-full"
                src={person.imageUrl}
                width={200}
                height={220}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
