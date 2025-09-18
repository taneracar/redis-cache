import type { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const body = req.body || {};
    const key = body.key || "default-key";
    const path = body.path || "/";

    // Redis cache temizle
    await redis.del(key);

    // Next.js ISR revalidate
    if (path) await res.revalidate(path);

    return res.json({ success: true, method: req.method });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error clearing cache" });
  }
}
