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

      <h1 className="text-3xl font-bold mb-8">
        Audit Logs
      </h1>

      <div className="space-y-3">

        {logs.map((log) => (
          <div
            key={log.id}
            className="bg-white border rounded-xl p-4"
          >
            <div>
              {log.action}
            </div>

            <div className="text-sm text-gray-500">
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
