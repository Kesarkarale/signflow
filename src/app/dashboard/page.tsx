import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const totalDocs =
    await prisma.document.count();

  const pendingDocs =
    await prisma.document.count({
      where: {
        status: "PENDING",
      },
    });

  const signedDocs =
    await prisma.document.count({
      where: {
        status: "SIGNED",
      },
    });

  const recentDocs =
    await prisma.document.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your documents &
              signatures
            </p>
          </div>

          <a
            href="/dashboard/upload"
            className="bg-black text-white px-5 py-3 rounded-xl"
          >
            Upload Document
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">
              Total Documents
            </h3>

            <p className="text-4xl font-bold mt-3">
              {totalDocs}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">
              Pending
            </h3>

            <p className="text-4xl font-bold mt-3 text-orange-500">
              {pendingDocs}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">
              Signed
            </h3>

            <p className="text-4xl font-bold mt-3 text-green-600">
              {signedDocs}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow mt-10 p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Documents
          </h2>

          <div className="space-y-4">
            {recentDocs.map((doc) => (
              <div
                key={doc.id}
                className="border rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {doc.status}
                  </p>
                </div>

                <a
                  href={`/sign/${doc.id}`}
                  className="bg-black text-white px-4 py-2 rounded-lg"
                >
                  Open
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
