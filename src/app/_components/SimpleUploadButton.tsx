import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";
import IconIconUpload from "./IconIconUpload";

type Input = Parameters<typeof useUploadThing>;
const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);
    console.log("uploaded files", result);
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/",
    },
    isUploading: $ut.isUploading,
  };
};

export function SimpleUploadButton() {
  const router = useRouter();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onClientUploadComplete() {
      router.refresh();
    },
  });
  return (
    <div className="mr-5 ">
      <label
        htmlFor="upload-button"
        className="flex cursor-pointer justify-center gap-2 rounded-md bg-green-600 px-5 py-2 align-middle text-white"
      >
        <div>
          <IconIconUpload />{" "}
        </div>{" "}
        <p>Upload</p>
      </label>
      <input
        type="file"
        id="upload-button"
        {...inputProps}
        className="sr-only "
      />
    </div>
  );
}
