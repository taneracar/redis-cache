import { redis } from "./redis";

export async function getUser(id: string, forceRefresh = false) {
  const cached = await redis.hgetall<Record<string, string>>(`user:${id}`);

  if (!forceRefresh && cached && Object.keys(cached).length > 0) {
    return cached; // Redis'ten geldi
  }

  // Strapi'den çek
  const res = await fetch(
    `https://devoted-symphony-50466bf56c.strapiapp.com/api/brands?filters[documentId][$eq]=${id}`
  );
  const data = await res.json();
  const userData = data.data[0];

  if (!userData) return null;

  // Cache'e yaz
  const fields: Record<string, string> = {};
  if (userData.title) fields.title = userData.title;
  if (userData.description) fields.description = userData.description;
  if (userData.link) fields.link = userData.link;

  if (Object.keys(fields).length > 0) {
    await redis.hset(`user:${id}`, fields);
  }

  return userData;
}
