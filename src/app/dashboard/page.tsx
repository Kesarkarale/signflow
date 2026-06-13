import { prisma } from "@/lib/prisma";
import DashboardStats from "@/components/dashboardstats";

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
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <DashboardStats
        totalDocs={totalDocs}
        pendingDocs={pendingDocs}
        signedDocs={signedDocs}
      />

      <div className="mt-10 bg-white rounded-2xl border p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Documents
        </h2>

        <div className="space-y-3">
          {recentDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between border-b pb-3"
            >
              <span>{doc.title}</span>
              <span>{doc.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
