import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI in .env");
}

const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

async function getCollection(name, fallback) {
  const connected = await clientPromise;
  const dbName = process.env.MONGODB_DB || "bescored";
  const collectionName = process.env[name] || fallback;
  return connected.db(dbName).collection(collectionName);
}

export async function getNewsCollection() {
  return getCollection("MONGODB_COLLECTION", "news");
}

export async function getChroniquesCollection() {
  return getCollection("MONGODB_CHRONIQUES_COLLECTION", "chroniques");
}
