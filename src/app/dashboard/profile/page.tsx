import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const totalDocs =
    await prisma.document.count();

  const signedDocs =
    await prisma.document.count({
      where: {
        status: "SIGNED",
      },
    });

  const pendingDocs =
    await prisma.document.count({
      where: {
        status: "PENDING",
      },
    });

  const totalSignatures =
    await prisma.signature.count();

  const recentActivity =
    await prisma.auditLog.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="p-8 space-y-8">

      {/* Hero */}

      <div className="
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-purple-600
        rounded-3xl
        p-8
        text-white
        shadow-xl
      ">

        <div className="flex items-center gap-6">

          <div className="
            w-28
            h-28
            rounded-full
            bg-white/20
            flex
            items-center
            justify-center
            text-5xl
            font-bold
          ">
            K
          </div>

          <div>

            <h1 className="text-4xl font-bold">
              Kesar Karale
            </h1>

            <p className="text-blue-100 mt-2">
              Premium User
            </p>

            <p className="text-blue-200 text-sm mt-1">
              SignFlow Member
            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">

        <div className="
          bg-white
          dark:bg-slate-900
          border
          rounded-3xl
          p-6
        ">
          <p className="text-slate-500">
            Total Documents
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {totalDocs}
          </h2>
        </div>

        <div className="
          bg-white
          dark:bg-slate-900
          border
          rounded-3xl
          p-6
        ">
          <p className="text-slate-500">
            Signed Documents
          </p>

          <h2 className="text-4xl font-bold mt-2 text-green-600">
            {signedDocs}
          </h2>
        </div>

        <div className="
          bg-white
          dark:bg-slate-900
          border
          rounded-3xl
          p-6
        ">
          <p className="text-slate-500">
            Pending Documents
          </p>

          <h2 className="text-4xl font-bold mt-2 text-yellow-600">
            {pendingDocs}
          </h2>
        </div>

        <div className="
          bg-white
          dark:bg-slate-900
          border
          rounded-3xl
          p-6
        ">
          <p className="text-slate-500">
            Signatures
          </p>

          <h2 className="text-4xl font-bold mt-2 text-blue-600">
            {totalSignatures}
          </h2>
        </div>

      </div>

      {/* Account Information */}

      <div className="
        bg-white
        dark:bg-slate-900
        border
        rounded-3xl
        p-8
      ">

        <h2 className="text-2xl font-bold mb-6">
          Account Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="text-slate-500">
              Full Name
            </label>

            <div className="
              mt-2
              p-4
              border
              rounded-xl
            ">
              Kesar Karale
            </div>

          </div>

          <div>

            <label className="text-slate-500">
              Email
            </label>

            <div className="
              mt-2
              p-4
              border
              rounded-xl
            ">
              kesar@example.com
            </div>

          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="
        bg-white
        dark:bg-slate-900
        border
        rounded-3xl
        p-8
      ">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        {recentActivity.length === 0 ? (
          <p className="text-slate-500">
            No activity found.
          </p>
        ) : (
          <div className="space-y-4">

            {recentActivity.map(
              (activity) => (
                <div
                  key={activity.id}
                  className="
                    p-4
                    border
                    rounded-2xl
                  "
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
              )
            )}

          </div>
        )}

      </div>

    </div>
  );
}
