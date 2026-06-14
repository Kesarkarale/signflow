import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function DocumentsPage() {
  const documents = await prisma.document.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Documents
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all your uploaded documents.
          </p>
        </div>

        <Link
          href="/upload"
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Upload Document
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left">
                Document
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Created
              </th>

              <th className="p-4 text-right">
                Actions
              </th>
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
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      doc.status === "SIGNED"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>

                <td className="p-4">
                  {new Date(
                    doc.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4 text-right space-x-2">
                  <Link
                    href={`/documents/${doc.id}`}
                    className="bg-slate-100 px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <Link
                    href={`/sign/${doc.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Sign
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
