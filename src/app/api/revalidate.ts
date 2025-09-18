import type { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Burada Redis cache temizle
    const key = req.body.key; // trigger ile gelen key
    await redis.del(key);

    // Opsiyonel: ISR için Vercel revalidate
    if (req.body.path) {
      await res.revalidate(req.body.path);
    }

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
