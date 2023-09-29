import Image from 'next/image'

export default function News() {

  const posts = [
    {
      id: 1,
      title: 'Lorem Impsum',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        '/images/man.jpg',
      date: '16 Mars 2023',
      datetime: '16-03-2023',
      category: { title: 'Etude', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Directeur',
        href: '#',
        imageUrl:
          '/images/man.jpg',
      },
    },
    {
      id: 2,
      title: 'Lorem Impsum',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        '/images/man.jpg',
      date: '16 Mars 2023',
      datetime: '16-03-2023',
      category: { title: 'Etude', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Directeur',
        href: '#',
        imageUrl:
          '/images/man.jpg',
      },
    },
    {
      id: 3,
      title: 'Lorem Impsum',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        '/images/man.jpg',
      date: '16 Mars 2023',
      datetime: '16-03-2023',
      category: { title: 'Etude', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Directeur',
        href: '#',
        imageUrl:
          '/images/man.jpg',
      },
    },
   
  ]

  return (
    
   <> 
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
    
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
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" /> */}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
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
