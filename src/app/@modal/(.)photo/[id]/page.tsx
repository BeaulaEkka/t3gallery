import Modal from "./Modal";
import ModalComponent from "./ModalComponent";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  return (
    <div>
      <Modal>
        <ModalComponent id={idAsNumber} />
      </Modal>
    </div>
  );
}
