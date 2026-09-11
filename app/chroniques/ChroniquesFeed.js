import Link from "next/link";

export default function ChroniquesFeed({
  posts,
  basePath = "/chroniques",
  readMore = "Lire la suite",
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-16 mb-24">
      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <article
            key={post.uid}
            className="rounded-xl border-2 border-[#4DB4C4] bg-white p-8"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              {post.date}
            </p>
            <h3 className="mt-3 text-2xl font-light oswald uppercase leading-snug">
              <Link href={`${basePath}/${post.uid}`}>{post.title}</Link>
            </h3>
            {post.excerpt && (
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {post.excerpt}
                {post.excerpt.length >= 280 ? "…" : ""}
              </p>
            )}
            <div className="pt-6">
              <Link
                href={`${basePath}/${post.uid}`}
                className="btn btn-blue inline-block"
              >
                {readMore}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
