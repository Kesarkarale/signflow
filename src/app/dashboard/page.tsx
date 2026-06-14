import { prisma } from "@/lib/prisma";

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

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Total Documents</h3>
          <p className="text-4xl font-bold mt-3">
            {totalDocs}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Pending</h3>
          <p className="text-4xl font-bold mt-3 text-yellow-500">
            {pendingDocs}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3>Signed</h3>
          <p className="text-4xl font-bold mt-3 text-green-600">
            {signedDocs}
          </p>
        </div>

      </div>

    </div>
  );
}
