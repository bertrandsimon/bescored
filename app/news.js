import Image from 'next/image'

export default function News() {

  const posts = [
    {
      id: 1,
      title: 'ECA : European Club Association',
      href: '#',
      description:
        'Christophe Hausswirth a été élu le 7 septembre 2023 au Board Medical & Performance de l’ECA (comprenant les 250 meilleurs clubs de football européen) et ce pour une durée de 4 ans. ',
      imageUrl:
        '/images/news/1.jpg',
      date: '16 Mars 2023',
      datetime: '16 Sept 2023',
      category: { title: 'Partenaire', href: '#' },
      author: {
        name: 'Christophe Hausswirth',
        role: 'beScored',
        href: '#',
        imageUrl:
          '/images/chris.jpg',
      },
    },
    {
      id: 2,
      title: 'Johnson & Johnson',
      href: '#',
      description:
        'Après une étude conduite sur la fatigue des chirurgiens orthopédiques avec le groupe Johnson & Johnson, les données issues de cette recherche ont été acceptées pour publication dans la revue Journal of Othopaedic Experience and Innovation (JOEI) le 1er septembre 2023.',
      imageUrl:
        '/images/news/2.jpg',
      date: '16 Sept 2023',
      datetime: '16-03-2023',
      category: { title: 'Etude', href: '#' },
      author: {
        name: 'Christophe Hausswirth',
        role: 'beScored',
        href: '#',
        imageUrl:
          '/images/chris.jpg',
      },
    },
    {
      id: 3,
      title: 'Info',
      href: '#',
      description:
        'Nous sommes désormais en mesure d’évaluer avec objectivité la fatigue mentale des personnels soignants et des chirurgiens. C’est ce que nous réalisons au pôle santé Saint-Jean (Cagnes-sur-mer) jusqu’à la Toussaint 2023, et en partenariat avec le laboratoire d’analyses Cerballiance. ',
      imageUrl:
        '/images/news/3.jpg',
      date: '16 Sept 2023',
      datetime: '16-03-2023',
      category: { title: 'Etude', href: '#' },
      author: {
        name: 'Christophe Hausswirth',
        role: 'beScored',
        href: '#',
        imageUrl:
          '/images/chris.jpg',
      },
    },
   
  ]

  return (
    
   <> 
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-40">
    
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={380}
                  height={190}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bpx-3 py-1.5 font-norma"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6">
                    
                      <span className="absolute inset-0" />
                      {post.title}
                  
                  </h3>
                  <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      
                        <span className="absolute inset-0" />
                        {post.author.name}
                   
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
          
        </div>
      </div>
    </div>
   </>
   
  )
}
