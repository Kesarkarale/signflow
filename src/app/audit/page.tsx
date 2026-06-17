import { prisma } from "@/lib/prisma";
import PageWithSidebar from "@/components/PageWithSidebar";

export default async function AuditPage() {
const logs =
await prisma.auditLog.findMany({
orderBy: {
createdAt: "desc",
},
});

const totalLogs = logs.length;

return ( 
  <PageWithSidebar> 
  <div className="p-8 space-y-8">

  {/* Hero */}

  <div
    className="
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-purple-600
    rounded-3xl
    p-8
    text-white
    shadow-xl
  "
  >

    <h1 className="text-4xl font-bold">
      Audit Logs 📋
    </h1>

    <p className="mt-3 text-blue-100">
      Track every action performed on your
      documents and signatures.
    </p>

    <div className="mt-8 flex gap-6">

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 min-w-[140px]">
        <h3 className="text-3xl font-bold">
          {totalLogs}
        </h3>

        <p className="text-blue-100">
          Total Events
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 min-w-[140px]">
        <h3 className="text-3xl font-bold">
          Live
        </h3>

        <p className="text-blue-100">
          Monitoring
        </p>
      </div>

    </div>

  </div>

  {/* Search */}

  <div
    className="
    bg-white
    dark:bg-slate-900
    border
    dark:border-slate-800
    rounded-3xl
    p-6
  "
  >

    <input
      placeholder="Search audit logs..."
      className="
        w-full
        rounded-2xl
        border
        dark:border-slate-700
        bg-transparent
        px-4
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />

  </div>

  {/* Activity Timeline */}

  <div
    className="
    bg-white
    dark:bg-slate-900
    rounded-3xl
    border
    dark:border-slate-800
    overflow-hidden
  "
  >

    <div className="p-6 border-b dark:border-slate-800">

      <h2 className="text-2xl font-bold">
        Recent Activity
      </h2>

      <p className="text-slate-500 mt-1">
        Complete audit history
      </p>

    </div>

    {logs.length === 0 ? (
      <div className="p-10 text-center">

        <div className="text-6xl mb-4">
          📋
        </div>

        <h3 className="text-xl font-semibold">
          No Audit Logs Found
        </h3>

        <p className="text-slate-500 mt-2">
          Activity will appear here once
          users interact with documents.
        </p>

      </div>
    ) : (
      <div className="divide-y dark:divide-slate-800">

        {logs.map((log) => (
          <div
            key={log.id}
            className="
              p-6
              hover:bg-slate-50
              dark:hover:bg-slate-800
              transition
            "
          >

            <div className="flex items-start gap-4">

              <div
                className="
                h-12
                w-12
                rounded-2xl
                bg-blue-100
                dark:bg-blue-900
                flex
                items-center
                justify-center
                text-xl
              "
              >
                📌
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-lg">
                  {log.action}
                </h3>

                <p className="text-slate-500 mt-1">
                  {new Date(
                    log.createdAt
                  ).toLocaleString()}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>
    )}

  </div>

</div>
    </PageWithSidebar>
);
}
