import { prisma } from "@/lib/prisma";

import DashboardStats from "@/components/dashboardstats";
import DashboardHeader from "@/components/dashboard-header";
import ProfileCard from "@/components/profile-card";
import ActivityFeed from "@/components/activity-feed";
import AnalyticsChart from "@/components/analytics-chart";

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
    <div className="p-8 space-y-8">

      {/* Header */}

      <DashboardHeader />

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

      {/* Analytics + Profile */}

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>

        <ProfileCard />

      </div>

      {/* Activity Feed */}

      <ActivityFeed />

      {/* Recent Documents */}

      <div className="bg-white rounded-3xl border shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Recent Documents
          </h2>

          <a
            href="/documents"
            className="text-blue-600 font-medium"
          >
            View All
          </a>

        </div>

        {recentDocs.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            No documents uploaded yet.
          </div>
        ) : (
          <div className="space-y-3">

            {recentDocs.map((doc) => (
              <div
                key={doc.id}
                className="
                  flex
                  items-center
                  justify-between
                  p-4
                  border
                  rounded-2xl
                  hover:bg-slate-50
                  transition
                "
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

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      doc.status === "SIGNED"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {doc.status}
                  </span>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}
