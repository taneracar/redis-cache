import { fetchData } from "@/services/api";
import { apiURL } from "@/services/api-urls";
import { TBrands } from "@/types";
import { getUser } from "@/lib/userCache";
const getData = async () => {
  const [resBrandsPageData] = await Promise.all([
    fetchData<TBrands[]>(apiURL.BrandsDetails),
  ]);

  return {
    BrandsPageData: resBrandsPageData as TBrands[],
  };
};

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const { BrandsPageData } = await getData();
  console.log(BrandsPageData);
  const user = await getUser("x8g32n32h29inpgqumd9ytev");

  return (
    <div className="flex items-center justify-center w-full h-screen flex-col gap-10 text-white">
      {BrandsPageData.map((item, index) => (
        <h1 key={index} className="text-5xl text-white ">
          {item.title}
        </h1>
      ))}
      <h2>{user.title}</h2>
      <p>{user.description}</p>
      <p>{user.link}</p>
    </div>
  );
}
