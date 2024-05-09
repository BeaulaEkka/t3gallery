import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";
import DownloadButton from "./DownloadButton";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="m-auto mt-36 flex w-[80%] flex-wrap gap-4 ">
      {images.map((image) => (
        <div key={image.id} className="">
          <Link href={`/photo/${image.id}`}>
            <div className="relative ">
              <Image
                src={image.url}
                width={350}
                height={350}
                alt={image.name}
                style={{
                  objectFit: "cover",
                  width: "350px",
                  height: "350px",
                }}
              />
              {/* Conditionally render the button based on hover state */}
              <DownloadButton imageId={image.id} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
