import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function DocumentsPage() {
  const documents = await prisma.document.findMany({
    include: {
      owner: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Documents
            </h1>

            <p className="text-slate-500 mt-1">
              Manage and track all uploaded documents
            </p>
          </div>

          <Link
            href="/upload"
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Upload Document
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Owner</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Created</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {doc.title}
                  </td>

                  <td className="p-4">
                    {doc.owner?.email}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        doc.status === "SIGNED"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </td>

                  <td className="p-4 text-slate-500">
                    {new Date(
                      doc.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4 flex gap-2">
                    <Link
                      href={`/sign/${doc.id}`}
                      className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm"
                    >
                      Open
                    </Link>

                    <Link
                      href={`/audit?doc=${doc.id}`}
                      className="px-3 py-2 rounded-lg bg-slate-200 text-sm"
                    >
                      Audit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {documents.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold">
                No Documents Found
              </h3>

              <p className="text-slate-500 mt-2">
                Upload your first document
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
