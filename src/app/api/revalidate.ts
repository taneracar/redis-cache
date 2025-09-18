import type { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";

const redis = new Redis("https://fast-bison-13652.upstash.io");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.body;

  if (!id) return res.status(400).json({ message: "No ID provided" });

  await redis.del(`myKey:${id}`); // cache temizleniyor

  res.status(200).json({ message: `Cache cleared for id ${id}` });
}
