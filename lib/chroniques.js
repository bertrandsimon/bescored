import { getChroniquesCollection } from "./mongodb";

export function slugify(text = "") {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

export function makeChroniqueUid(publishedAt, title) {
  const date = publishedAt || new Date().toISOString().slice(0, 10);
  const slug = slugify(title) || "chronique";
  return `${date}-${slug}`;
}

function sanitizeLocale(locale = {}) {
  return {
    title: String(locale.title || "").trim(),
    dateLabel: String(locale.dateLabel || "").trim(),
    body: String(locale.body || "").trim(),
  };
}

function sanitizeImageUrl(value = "") {
  let url = String(value || "").trim();
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return "";
    return parsed.href;
  } catch {
    return "";
  }
}

export function sanitizeChronique(payload = {}, { uid } = {}) {
  const localeFr = sanitizeLocale(payload.locale?.fr);
  const localeEn = sanitizeLocale(payload.locale?.en);
  const publishedAt = String(payload.publishedAt || "").slice(0, 10);
  const nextUid =
    uid || payload.uid || makeChroniqueUid(publishedAt, localeFr.title || localeEn.title);

  return {
    uid: nextUid,
    publishedAt,
    link: String(payload.link || "").trim(),
    author: String(payload.author || "Dr. Christophe Hausswirth").trim(),
    image_fr: sanitizeImageUrl(payload.image_fr),
    image_uk: sanitizeImageUrl(payload.image_uk),
    locale: {
      fr: localeFr,
      en: localeEn,
    },
    updatedAt: new Date().toISOString(),
  };
}

export function mapChronique(doc, locale = "fr") {
  const translation = doc.locale?.[locale] || doc.locale?.fr || {};
  const body = translation.body || "";
  const image = sanitizeImageUrl(
    locale === "en" ? doc.image_uk : doc.image_fr
  );

  return {
    uid: doc.uid,
    href: doc.link || "",
    author: doc.author || "",
    title: translation.title,
    body,
    image,
    excerpt: body.replace(/\s+/g, " ").trim().slice(0, 280),
    datetime: doc.publishedAt,
    date: translation.dateLabel,
  };
}

export async function getChroniques(locale = "fr") {
  const collection = await getChroniquesCollection();
  const docs = await collection.find({}).sort({ publishedAt: -1 }).toArray();
  return docs.map((doc) => mapChronique(doc, locale));
}

export async function getChronique(uid, locale = "fr") {
  const collection = await getChroniquesCollection();
  const doc = await collection.findOne({ uid });
  if (!doc) return null;
  return mapChronique(doc, locale);
}

export async function listChroniquesRaw() {
  const collection = await getChroniquesCollection();
  return collection
    .find({}, { projection: { _id: 0 } })
    .sort({ publishedAt: -1 })
    .toArray();
}

export async function getChroniqueRaw(uid) {
  const collection = await getChroniquesCollection();
  const doc = await collection.findOne({ uid }, { projection: { _id: 0 } });
  return doc;
}

export async function createChronique(payload) {
  const doc = sanitizeChronique(payload);
  if (!doc.publishedAt || !doc.locale.fr.title) {
    throw new Error("Title and date are required");
  }
  const collection = await getChroniquesCollection();
  const existing = await collection.findOne({ uid: doc.uid });
  if (existing) {
    throw new Error("An entry with this date and title already exists");
  }
  doc.createdAt = new Date().toISOString();
  await collection.insertOne(doc);
  const { _id, ...rest } = doc;
  return rest;
}

export async function updateChronique(uid, payload) {
  const collection = await getChroniquesCollection();
  const current = await collection.findOne({ uid });
  if (!current) return null;
  const doc = sanitizeChronique({ ...current, ...payload }, { uid });
  await collection.updateOne({ uid }, { $set: doc });
  return doc;
}

export async function deleteChronique(uid) {
  const collection = await getChroniquesCollection();
  const result = await collection.deleteOne({ uid });
  return result.deletedCount > 0;
}
