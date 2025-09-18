export async function fetchData<T>(
  endpoint: string,
): Promise<T | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`,
    {
      //   next: { revalidate: 7200 },
      cache: "no-cache",
      method: "GET",
    }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.data || [];
}
