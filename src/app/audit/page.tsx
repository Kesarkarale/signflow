import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AuditPage() {
  const logs = await prisma.auditLog.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 50,
  });

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Audit Logs
        </h1>

        <div className="bg-white rounded-2xl border">

          {logs.length === 0 ? (
            <div className="p-8">
              No logs found.
            </div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className="border-b p-4"
              >
                <div className="font-medium">
                  {log.action}
                </div>

                <div className="text-sm text-gray-500">
                  {new Date(
                    log.createdAt
                  ).toLocaleString()}
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}
