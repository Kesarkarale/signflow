import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DocumentPage({
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
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl border p-8">

          <h1 className="text-3xl font-bold mb-2">
            {document.title}
          </h1>

          <p className="text-gray-500 mb-6">
            Status: {document.status}
          </p>

          <div className="border rounded-xl p-6 bg-slate-50">
            <p className="mb-2">
              PDF URL
            </p>

            <a
              href={document.fileUrl}
              target="_blank"
              className="text-blue-600"
            >
              Open PDF
            </a>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
              Sign Document
            </button>

            <button className="border px-5 py-3 rounded-xl">
              Download
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
