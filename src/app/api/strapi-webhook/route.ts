// app/api/strapi-webhook/route.ts
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Webhook body:", body);
  const { model, event, entry, changedFields } = body;

  if (model === "brand" && event === "entry.update") {
    const fields: Record<string, string> = {};
    changedFields.forEach((field: string) => {
      const value = entry[field];
      if (value !== null && value !== undefined) {
        fields[field] = value;
      }
    });

    if (Object.keys(fields).length > 0) {
      await redis.hset(`user:${entry.id}`, fields);
    }
  }

  return Response.json({ ok: true });
}
