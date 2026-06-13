import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: {
      maxFileSize: "16MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async ({ file }) => {
    console.log("Uploaded:", file.url);

    return {
      url: file.url,
    };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
