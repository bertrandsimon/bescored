import Image from "next/image";
import posts from "./datas/newsPosts";

export default function News3() {
  const latest = posts.slice(0, 3);

  return (
    <>
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-40">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {latest.map((post) => (
              <article
                key={post.uid || post.id}
                className="flex flex-col items-start h-full justify-between"
              >
                <div className="relative w-full aspect-[16/9] rounded-2xl bg-[#f4f6f7] overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-contain p-3"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl flex flex-col justify-start items-start">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <span>{post.category.title}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6">
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-7 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
