import { prisma } from "@/lib/prisma";
import {
  FileText,
  Clock3,
  CheckCircle2,
  Activity,
} from "lucide-react";

export default async function DashboardPage() {
  const totalDocs = await prisma.document.count();

  const pendingDocs = await prisma.document.count({
    where: {
      status: "PENDING",
    },
  });

  const signedDocs = await prisma.document.count({
    where: {
      status: "SIGNED",
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
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Manage documents and signatures
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">
                Total Documents
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {totalDocs}
              </h2>
            </div>

            <FileText className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">
                Pending
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {pendingDocs}
              </h2>
            </div>

            <Clock3 className="w-10 h-10 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">
                Signed
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {signedDocs}
              </h2>
            </div>

            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5" />
          <h2 className="text-xl font-semibold">
            Recent Documents
          </h2>
        </div>

        <div className="space-y-4">
          {recentDocs.length === 0 ? (
            <div className="text-slate-500">
              No documents found.
            </div>
          ) : (
            recentDocs.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between border rounded-xl p-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {new Date(
                      doc.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    doc.status === "SIGNED"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {doc.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
