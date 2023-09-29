import Image from 'next/image'

export default function Content() {

  const people = [
    {
      name: 'Lorem ipsum',
      role: 'Poste',
      imageUrl:
        '/images/man.jpg',
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
    {
      name: 'Lorem ipsum',
      role: 'Poste',
      imageUrl:
        '/images/man.jpg',
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
    {
      name: 'Lorem ipsum',
      role: 'Poste',
      imageUrl:
        '/images/man.jpg',
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
    {
      name: 'Lorem ipsum',
      role: 'Poste',
      imageUrl:
        '/images/man.jpg',
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
  
  ]
  
  return (

    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">

         <p className='uppercase oswald text-4xl '>
            <span className='pr-2 font-semibold'>notre</span>
            <span className='font-light'>équipe</span>
          </p>

        <p className="mt-6 text-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veniam reprehenderit maxime repellat obcaecati ab, evenie
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
      >
        {people.map((person) => (
          <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
            <Image className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" width={200} height={220} />
            <div className="flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
   
  )
}
