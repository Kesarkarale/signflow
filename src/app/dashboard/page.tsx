import { prisma } from "@/lib/prisma";

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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-xl border p-6">
          <h3>Total Documents</h3>
          <p className="text-4xl font-bold">{totalDocs}</p>
        </div>

        <div className="rounded-xl border p-6">
          <h3>Pending</h3>
          <p className="text-4xl font-bold">{pendingDocs}</p>
        </div>

        <div className="rounded-xl border p-6">
          <h3>Signed</h3>
          <p className="text-4xl font-bold">{signedDocs}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Recent Documents
        </h2>

        <div className="space-y-3">
          {recentDocs.map((doc) => (
            <div
              key={doc.id}
              className="border rounded-lg p-4"
            >
              <div>{doc.title}</div>
              <div className="text-sm text-gray-500">
                {doc.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
