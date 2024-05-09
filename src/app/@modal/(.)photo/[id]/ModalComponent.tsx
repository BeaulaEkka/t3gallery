import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function ModalComponent(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[90%] items-center justify-center bg-white ">
        <img
          src={image.url}
          alt="photo"
          className="h-[40%] w-[45%] rounded-lg"
        />
        <div className="flex h-[40%] w-[45%] flex-col bg-red-500">
          <h1 className="p-5 text-2xl font-bold">{image.name}</h1>
          <div className="flex flex-col">
            <div className="flex">
              <p>Uploaded By: </p>
              <p className="pl-2">{uploaderInfo.fullName}</p>
            </div>
            <div className="flex">
              <p>Created On: </p>
              <p className="pl-2">
                {" "}
                {new Date(image.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
