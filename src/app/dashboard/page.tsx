import { prisma } from "@/lib/prisma"; 
import DashboardStats from "@/components/dashboardstats";
import DashboardHeader from "@/components/dashboard-header";
import ProfileCard from "@/components/profile-card";
import AnalyticsChart from "@/components/analytics-chart";
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

return (
  <div className="p-8 space-y-8">

    <DashboardHeader />

    {/* Hero */}

    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">

      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-3 text-blue-100 max-w-2xl">
        Manage your documents, signatures and audit logs
        from one powerful dashboard.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/upload"
          className="bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold"
        >
          Upload Document
        </a>

        <a
          href="/documents"
          className="border border-white/30 px-5 py-3 rounded-xl"
        >
          View Documents
        </a>

      </div>

      <div className="mt-8 flex gap-10">

        <div>
          <h3 className="text-3xl font-bold">
            {totalDocs}
          </h3>
          <p className="text-blue-100">
            Documents
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            {signedDocs}
          </h3>
          <p className="text-blue-100">
            Signed
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            {pendingDocs}
          </h3>
          <p className="text-blue-100">
            Pending
          </p>
        </div>

      </div>

    </div>

    {/* Quick Actions */}

    <div className="grid md:grid-cols-3 gap-6">

      <a
        href="/upload"
        className="bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl transition"
      >
        <div className="text-4xl mb-4">📤</div>

        <h3 className="text-xl font-bold">
          Upload Document
        </h3>

        <p className="text-slate-500 mt-2">
          Upload PDFs for digital signatures.
        </p>
      </a>

      <a
        href="/documents"
        className="bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl transition"
      >
        <div className="text-4xl mb-4">✍️</div>

        <h3 className="text-xl font-bold">
          Sign Requests
        </h3>

        <p className="text-slate-500 mt-2">
          Manage and send signatures.
        </p>
      </a>

      <a
        href="/audit"
        className="bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl transition"
      >
        <div className="text-4xl mb-4">📋</div>

        <h3 className="text-xl font-bold">
          Audit Logs
        </h3>

        <p className="text-slate-500 mt-2">
          Track every document action.
        </p>
      </a>

    </div>

    {/* Stats */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

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

      <DashboardStats
        title="Signatures"
        value={signatureCount}
      />

      <DashboardStats
        title="Audit Logs"
        value={auditCount}
      />

    </div>

    {/* Analytics */}

    <div className="grid xl:grid-cols-3 gap-6">

      <div className="xl:col-span-2">
        <AnalyticsChart />
      </div>

      <ProfileCard />

    </div>

    {/* Activity + Documents */}

    <div className="grid xl:grid-cols-2 gap-6">

      <div className="bg-white dark:bg-slate-900 rounded-3xl border dark:border-slate-800 p-6">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activity
        </h2>

        {recentActivity.length === 0 ? (
          <p className="text-slate-500">
            No activity found.
          </p>
        ) : (
          <div className="space-y-3">

            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="p-4 rounded-2xl border dark:border-slate-800"
              >
                <p className="font-semibold">
                  {activity.action}
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  {new Date(
                    activity.createdAt
                  ).toLocaleString()}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border dark:border-slate-800 p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Recent Documents
          </h2>

          <a
            href="/documents"
            className="text-blue-600 font-semibold"
          >
            View All
          </a>

        </div>

        {recentDocs.length === 0 ? (
          <p className="text-slate-500">
            No documents found
          </p>
        ) : (
          <div className="space-y-3">

            {recentDocs.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 rounded-2xl border dark:border-slate-800"
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
                  className={`px-4 py-1 rounded-full text-xs font-semibold ${
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

  </div>
);
}
