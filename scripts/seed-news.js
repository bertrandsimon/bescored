const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

function loadEnv() {
  const envPath = path.join(__dirname, "..", ".env");
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

async function main() {
  loadEnv();

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || "bescored";
  const collectionName = process.env.MONGODB_COLLECTION || "news";

  if (!uri) {
    throw new Error("Missing MONGODB_URI");
  }

  const client = new MongoClient(uri);
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log(`Connected to MongoDB database "${dbName}"`);

  const collection = client.db(dbName).collection(collectionName);
  await collection.createIndex({ uid: 1 }, { unique: true });

  const newsPath = path.join(__dirname, "..", "app", "datas", "news.json");
  const news = JSON.parse(fs.readFileSync(newsPath, "utf8"));

  const operations = news.map((doc) => ({
    updateOne: {
      filter: { uid: doc.uid },
      update: { $set: doc },
      upsert: true,
    },
  }));

  const result = await collection.bulkWrite(operations);
  const count = await collection.countDocuments();
  const latest = await collection
    .find({}, { projection: { uid: 1, publishedAt: 1, "locale.fr.title": 1 } })
    .sort({ publishedAt: -1 })
    .limit(3)
    .toArray();

  console.log(
    `Seeded collection "${collectionName}" (upserted: ${result.upsertedCount}, modified: ${result.modifiedCount})`
  );
  console.log(`Fetched ${count} news documents`);
  latest.forEach((doc) => {
    console.log(`- ${doc.publishedAt} | ${doc.locale.fr.title}`);
  });

  await client.close();
}

main().catch((error) => {
  console.error("MongoDB seed/fetch failed:", error.message);
  process.exit(1);
});
