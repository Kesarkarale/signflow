import { prisma } from "@/lib/prisma";
import DashboardStats from "@/components/dashboardstats";

export default async function DashboardPage() {
  const totalDocs = await prisma.document.count();

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
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <DashboardStats
          title="Total Documents"
          value={totalDocs}
        />

        <DashboardStats
          title="Pending Documents"
          value={pendingDocs}
        />

        <DashboardStats
          title="Signed Documents"
          value={signedDocs}
        />

      </div>

      {/* Recent Documents */}

      <div className="mt-10 bg-white rounded-3xl border p-6">

        <h2 className="text-2xl font-bold mb-5">
          Recent Documents
        </h2>

        <div className="space-y-3">

          {recentDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between border rounded-xl p-4"
            >
              <div>
                <p className="font-semibold">
                  {doc.title}
                </p>

                <p className="text-sm text-slate-500">
                  {new Date(
                    doc.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <div>
                {doc.status}
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
