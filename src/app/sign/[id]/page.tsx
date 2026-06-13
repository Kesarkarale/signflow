import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import PdfViewer from "@/components/pdfviewer";
import Signature from "@/components/signature";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function SignPage({
  params,
}: Props) {
  const { id } = await params;

  const document =
    await prisma.document.findUnique({
      where: {
        id,
      },
    });

  if (!document) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-3xl font-bold mb-8">
          Sign Document
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white rounded-2xl p-4">
            <PdfViewer
              fileUrl={document.fileUrl}
            />
          </div>

          <div>
            <Signature />

            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl">
              Sign & Submit
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
