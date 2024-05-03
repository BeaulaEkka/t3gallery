import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="m-auto flex w-[80%] flex-wrap gap-4  ">
        {images.map((image) => (
          <div key={image.id} className="">
            <Image src={image.url} width={350} height={350} alt="Images" />
          </div>
        ))}
      </div>
    </main>
  );
}
