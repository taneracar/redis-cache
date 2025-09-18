import { Redis } from "@upstash/redis";

// Upstash Redis
export const redis = new Redis({
  url: "https://fast-bison-13652.upstash.io",
  token: "ATVUAAIncDFiMTc1ZDBmZDVmNjc0ZjQ2YWMwNTI1MGRkNjJkNjUwNXAxMTM2NTI",
});

// Eğer lokal Redis kullanıyorsan ioredis:
// import Redis from "ioredis";
// export const redis = new Redis("redis://localhost:6379");
