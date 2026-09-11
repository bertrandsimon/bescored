import Link from "next/link";

export default function ChroniqueArticle({
  post,
  backHref = "/chroniques",
  backLabel = "Toutes les chroniques",
  linkedinLabel = "Voir le post LinkedIn",
}) {
  if (!post) return null;

  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 mt-16 mb-24">
      <p className="text-xs text-gray-500 uppercase tracking-wide">{post.date}</p>
      <h1 className="mt-4 text-3xl sm:text-4xl font-light oswald uppercase leading-tight">
        {post.title}
      </h1>
      {post.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt={post.title || ""}
          className="mt-8 max-w-full h-auto rounded-xl"
        />
      )}
      <div className="mt-10 text-base leading-8 text-gray-800 whitespace-pre-line">
        {post.body}
      </div>
      {post.author && (
        <p className="mt-10 font-semibold">{post.author}</p>
      )}
      <div className="mt-10 flex flex-wrap gap-4">
        {post.href && (
          <a
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-blue inline-block"
          >
            {linkedinLabel}
          </a>
        )}
        <Link
          href={backHref}
          className="oswald uppercase inline-flex items-center px-4 py-2 border border-gray-300 rounded"
        >
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
