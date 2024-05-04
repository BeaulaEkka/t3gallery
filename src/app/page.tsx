import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="m-auto flex w-[80%] flex-wrap gap-4  ">
      {images.map((image) => (
        <div key={image.id} className="">
          <Image
            src={image.url}
            width={350}
            height={350}
            alt={image.name}
            style={{ objectFit: "cover", width: "350px", height: "350px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full">please Sign In</div>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
