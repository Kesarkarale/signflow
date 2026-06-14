import { prisma } from "@/lib/prisma";

export default async function AuditPage() {
  const logs =
    await prisma.auditLog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Audit Logs
      </h1>

      <div className="bg-white rounded-3xl border">

        {logs.map((log) => (
          <div
            key={log.id}
            className="p-4 border-b"
          >
            <div>
              {log.action}
            </div>

            <div className="text-sm text-slate-500">
              {new Date(
                log.createdAt
              ).toLocaleString()}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
