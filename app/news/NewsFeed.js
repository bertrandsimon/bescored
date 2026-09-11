import Image from "next/image";
import Link from "next/link";

const PAGE_SIZE = 6;

export default function NewsFeed({
  posts,
  page = 1,
  basePath = "/news",
}) {
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const visible = posts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 mb-24">
      <div className="flex flex-col gap-10 lg:gap-12">
        {visible.map((post) => {
          const hasLink = post.href && post.href !== "#";

          return (
            <article
              key={post.uid || post.id}
              className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10"
            >
              <div className="relative w-full sm:w-[42%] shrink-0 h-[220px] sm:h-[240px] rounded-2xl bg-[#f4f6f7] overflow-hidden ring-1 ring-inset ring-gray-900/10">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 42vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  {post.category?.title && (
                    <span className="text-gray-400">{post.category.title}</span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  {hasLink ? (
                    <a href={post.href} target="_blank" rel="noreferrer">
                      {post.title}
                    </a>
                  ) : (
                    post.title
                  )}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <nav
        aria-label="Pagination des news"
        className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-gray-200 py-3 text-sm tracking-wide"
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <Link
            key={n}
            href={n === 1 ? basePath : `${basePath}?page=${n}`}
            className={
              n === currentPage
                ? "font-semibold text-[#4DB4C4]"
                : "text-gray-500 hover:text-gray-800"
            }
          >
            Page {n}
          </Link>
        ))}
      </nav>
    </div>
  );
}
