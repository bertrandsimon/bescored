import { getNewsCollection } from "./mongodb";

function mapNews(doc, locale = "fr") {
  const translation = doc.locale?.[locale] || doc.locale?.fr || {};

  return {
    uid: doc.uid,
    href: doc.link || "#",
    imageUrl: doc.imageUrl,
    title: translation.title,
    description: translation.description,
    datetime: doc.publishedAt,
    date: translation.dateLabel,
    category: { title: translation.category },
  };
}

export async function getNews(locale = "fr") {
  const collection = await getNewsCollection();
  const docs = await collection.find({}).sort({ publishedAt: -1 }).toArray();
  return docs.map((doc) => mapNews(doc, locale));
}
