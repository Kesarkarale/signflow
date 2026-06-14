import { prisma } from "@/lib/prisma";

import DashboardStats from "@/components/dashboardstats";
import DashboardHeader from "@/components/dashboard-header";
import ProfileCard from "@/components/profile-card";
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

const signatureCount =
await prisma.signature.count();

const auditCount =
await prisma.auditLog.count();

const recentDocs =
await prisma.document.findMany({
take: 5,
orderBy: {
createdAt: "desc",
},
});

const recentActivity =
await prisma.auditLog.findMany({
take: 5,
orderBy: {
createdAt: "desc",
},
});

return ( <div className="p-8 space-y-8">

  <DashboardHeader />

  {/* Stats */}

  <div className="grid md:grid-cols-5 gap-6">

    <DashboardStats
      title="Total Documents"
      value={totalDocs}
    />

    <DashboardStats
      title="Pending Documents"
      value={pendingDocs}
      icon="⏳"
    />

    <DashboardStats
      title="Signed Documents"
      value={signedDocs}
      icon="✅"
    />

    <DashboardStats
      title="Signatures"
      value={signatureCount}
    />

    <DashboardStats
      title="Audit Logs"
      value={auditCount}
      icon="📋"
    />

    <DashboardStats
  title="Signed Documents"
  value={signedDocs}
/>
  </div>

  {/* Analytics */}

  <div className="grid lg:grid-cols-3 gap-6">

    <div className="lg:col-span-2">
      <AnalyticsChart />
    </div>

    <ProfileCard />

  </div>

  {/* Recent Activity */}

  <div className="bg-white rounded-3xl border p-6">

    <h2 className="text-2xl font-bold mb-5">
      Recent Activity
    </h2>

    {recentActivity.length === 0 ? (
      <p className="text-slate-500">
        No activity found.
      </p>
    ) : (
      <div className="space-y-3">

        {recentActivity.map(
          (activity) => (
            <div
              key={activity.id}
              className="border rounded-xl p-4"
            >
              <p className="font-semibold">
                {activity.action}
              </p>

              <p className="text-sm text-slate-500">
                {new Date(
                  activity.createdAt
                ).toLocaleString()}
              </p>
            </div>
          )
        )}

      </div>
    )}

  </div>

  {/* Recent Documents */}

  <div className="bg-white rounded-3xl border p-6">

    <div className="flex justify-between items-center mb-6">

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
      <div className="text-center py-10 text-slate-500">
        No documents found
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
              border
              rounded-xl
              p-4
              hover:bg-slate-50
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

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                doc.status === "SIGNED"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {doc.status}
            </span>

          </div>
        ))}

      </div>
    )}

  </div>

</div>

);
}
