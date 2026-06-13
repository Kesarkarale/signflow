import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DocumentsPage() {
  const documents = await prisma.document.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Documents
          </h1>

          <Link
            href="/upload"
            className="bg-blue-600 text-white px-5 py-3 rounded-xl"
          >
            Upload New
          </Link>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Created</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {doc.title}
                  </td>

                  <td className="p-4">
                    {doc.status}
                  </td>

                  <td className="p-4">
                    {new Date(
                      doc.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <Link
                      href={`/documents/${doc.id}`}
                      className="text-blue-600"
                    >
                      Open
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}
