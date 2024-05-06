import { getImage } from "~/server/queries";
import ModalComponent from "~/app/@modal/(.)photo/[id]/ModalComponent";

export default function ModalPage({
  params: { id: photoId },
}: {
  params: {
    id: string;
  };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  return <ModalComponent id={idAsNumber} />;
}
