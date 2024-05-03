import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
const mockUrls = [
  "https://utfs.io/f/e59e4d8d-cb75-4d1a-8c0c-3a1731dd2584-f97uj9.jpg",
  "https://utfs.io/f/2f9184f6-9473-40df-a284-f44f6c9e021d-f0rb6y.jpg",
  "https://utfs.io/f/eddfbdcf-f654-4c82-945d-5e0302c11996-ubsk2r.jpg",
  "https://utfs.io/f/5815712d-60e3-4e49-8446-3b9d930f99d6-166e5t.jfif",
  "https://utfs.io/f/25f64925-aa6e-4369-8fad-00c3cb49a927-ur8e12.jfif",
  "https://utfs.io/f/fdddf3f9-58a9-4d4c-b8e7-bfca3229e89b-z6hoxs.jpg",
  "https://utfs.io/f/8109a186-e1b8-4028-8378-db7a5db2bbeb-ny7y2o.jpg",
  "https://utfs.io/f/22d61353-9df6-4b2a-b1f9-49c30eea8ff5-zgg8hk.jpg",
  "https://utfs.io/f/4de260c2-3943-40f6-98d2-de61640efe02-11isvi.jpg",
  "https://utfs.io/f/d33d951c-7858-428d-8f25-ae3418f2a899-acx6sn.jfif",
  "https://utfs.io/f/c703ae3f-f318-48c6-914f-311cccc8c87f-qiil9l.jfif",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts: {
    id: number;
    name: string | null;
    createdAt: Date;
    updatedAt: Date | null;
  }[] = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="m-auto flex w-[80%] flex-wrap gap-4  ">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="">
            <Image src={image.url} width={350} height={350} alt="mockImages" />
          </div>
        ))}
      </div>
    </main>
  );
}
