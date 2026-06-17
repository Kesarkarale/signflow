import SignaturePad from "@/components/signature-canvas";
import { prisma } from "@/lib/prisma";

export default async function SignPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const document =
    await prisma.document.findUnique({
      where: {
        id,
      },
    });

  if (!document) {
    return (
      <div className="p-10">
        Document not found
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Sign Document
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <h2 className="font-bold mb-4">
            PDF Preview
          </h2>

          <iframe
            src={document.fileUrl}
            className="w-full h-[700px] rounded-xl border"
          />
        </div>

        <div className="bg-white border rounded-2xl p-6">
          <h2 className="font-bold mb-4">
            Draw Signature
          </h2>

          <SignaturePad
            documentId={document.id}
            signerId="demo-user-id"
          />
        </div>
      </div>
    </div>
  );
}
