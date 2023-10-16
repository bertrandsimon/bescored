import Image from "next/image";

export default function Subteam() {
  const people = [
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
    {
      name: "Lorem ipsum",
      role: "Poste",
      imageUrl: "/images/man.jpg",
    },
  ];

  return (
    <div className="bg-white">
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
