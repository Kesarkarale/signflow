import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function DocumentPage({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

const document =
await prisma.document.findUnique({
where: {
id,
},
});

if (!document) {
return ( <div className="p-10">
Document not found </div>
);
}

return ( <div className="p-8 space-y-8">

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
      {document.title}
    </h1>

    <p className="mt-3 text-blue-100">
      Manage, review and sign this document.
    </p>

  </div>

  <div className="grid xl:grid-cols-3 gap-6">

    {/* Main Content */}

    <div className="xl:col-span-2 space-y-6">

      {/* PDF Preview */}

      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        dark:border-slate-800
        rounded-3xl
        overflow-hidden
        shadow-sm
      "
      >

        <div className="p-6 border-b dark:border-slate-800">

          <h2 className="text-2xl font-bold">
            Document Preview
          </h2>

        </div>

       {document.fileUrl ? (
              <iframe
                src={document.fileUrl}
                className="w-full h-[700px]"
              />
            ) : (
              <div className="p-6 text-gray-500">
                No file uploaded
              </div>
            )}

      </div>

    </div>

    {/* Sidebar Info */}

    <div className="space-y-6">

      {/* Status */}

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

        <h3 className="text-xl font-bold mb-5">
          Status
        </h3>

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            document.status === "SIGNED"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {document.status}
        </span>

      </div>

      {/* Details */}

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

        <h3 className="text-xl font-bold mb-5">
          Details
        </h3>

        <div className="space-y-4">

          <div>
            <p className="text-slate-500 text-sm">
              Document ID
            </p>

            <p className="font-medium break-all">
              {document.id}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Created
            </p>

            <p className="font-medium">
              {new Date(
                document.createdAt
              ).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Updated
            </p>

            <p className="font-medium">
              {new Date(
                document.updatedAt
              ).toLocaleDateString()}
            </p>
          </div>

        </div>

      </div>

      {/* Actions */}

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

        <h3 className="text-xl font-bold mb-5">
          Quick Actions
        </h3>

        <div className="space-y-3">

          <a
            href={document.fileUrl}
            target="_blank"
            className="
              block
              w-full
              text-center
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-2xl
              font-semibold
            "
          >
            Open PDF
          </a>

          <Link
            href={`/sign/${document.id}`}
            className="
              block
              w-full
              text-center
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              rounded-2xl
              font-semibold
            "
          >
            Sign Document
          </Link>

          <Link
            href="/documents"
            className="
              block
              w-full
              text-center
              border
              dark:border-slate-700
              py-3
              rounded-2xl
              font-semibold
            "
          >
            Back To Documents
          </Link>

        </div>

      </div>

    </div>

  </div>

</div>

);
}
