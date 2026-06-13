import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const totalDocs = await prisma.document.count();

  const pendingDocs = await prisma.document.count({
    where: {
      status: "PENDING",
    },
  });

  const recentDocs = await prisma.document.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage documents and signatures
            </p>
          </div>

          <Link
            href="/upload"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            + Upload Document
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <h3 className="text-gray-500">
              Total Documents
            </h3>

            <p className="text-4xl font-bold mt-3">
              {totalDocs}
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <h3 className="text-gray-500">
              Pending Signatures
            </h3>

            <p className="text-4xl font-bold mt-3 text-orange-500">
              {pendingDocs}
            </p>
          </div>

          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <h3 className="text-gray-500">
              Completed
            </h3>

            <p className="text-4xl font-bold mt-3 text-green-600">
              {totalDocs - pendingDocs}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Link
            href="/upload"
            className="bg-white border rounded-2xl p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              Upload Document
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Upload PDF for signing
            </p>
          </Link>

          <Link
            href="/documents"
            className="bg-white border rounded-2xl p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              View Documents
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Manage uploaded files
            </p>
          </Link>

          <Link
            href="/audit"
            className="bg-white border rounded-2xl p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              Audit Logs
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              View activity history
            </p>
          </Link>
        </div>

        {/* Recent Documents */}
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">
            Recent Documents
          </h2>

          {recentDocs.length === 0 ? (
            <p className="text-gray-500">
              No documents uploaded yet.
            </p>
          ) : (
            <div className="space-y-3">
              {recentDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between border rounded-xl p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {doc.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {doc.status}
                    </p>
                  </div>

                  <Link
                    href={`/documents/${doc.id}`}
                    className="text-blue-600"
                  >
                    View
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
