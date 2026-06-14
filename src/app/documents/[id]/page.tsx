import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function DocumentPage({
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

      <div className="bg-white rounded-3xl p-8 border">

        <h1 className="text-4xl font-bold">
          {document.title}
        </h1>

        <p className="mt-4 text-slate-500">
          Status: {document.status}
        </p>

        <div className="mt-8 flex gap-4">

          <a
            href={document.fileUrl}
            target="_blank"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Open PDF
          </a>

          <Link
            href={`/sign/${document.id}`}
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Sign Document
          </Link>

        </div>

      </div>

    </div>
  );
}
