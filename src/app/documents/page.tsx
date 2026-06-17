import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
FileText,
Clock3,
CheckCircle2,
Upload,
} from "lucide-react";
import PageWithSidebar from "@/components/PageWithSidebar";

export default async function DocumentsPage() {
const documents =
await prisma.document.findMany({
orderBy: {
createdAt: "desc",
},
});

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

return  (
    <PageWithSidebar>
  <div className="p-8 space-y-8">

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    <div>
      <h1 className="text-4xl font-bold">
        Documents
      </h1>

      <p className="text-slate-500 mt-2">
        Manage all uploaded documents and signatures.
      </p>
    </div>

    <Link
      href="/upload"
      className="
        inline-flex
        items-center
        gap-2
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-6
        py-3
        rounded-2xl
        font-semibold
      "
    >
      <Upload size={18} />
      Upload Document
    </Link>

  </div>

  {/* Stats */}

  <div className="grid md:grid-cols-3 gap-6">

    <div className="
      bg-white
      dark:bg-slate-900
      border
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-sm
    ">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500">
            Total Documents
          </p>

          <h3 className="text-4xl font-bold mt-2">
            {totalDocs}
          </h3>
        </div>

        <FileText
          size={40}
          className="text-blue-500"
        />

      </div>
    </div>

    <div className="
      bg-white
      dark:bg-slate-900
      border
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-sm
    ">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500">
            Signed
          </p>

          <h3 className="text-4xl font-bold mt-2">
            {signedDocs}
          </h3>
        </div>

        <CheckCircle2
          size={40}
          className="text-green-500"
        />

      </div>
    </div>

    <div className="
      bg-white
      dark:bg-slate-900
      border
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-sm
    ">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500">
            Pending
          </p>

          <h3 className="text-4xl font-bold mt-2">
            {pendingDocs}
          </h3>
        </div>

        <Clock3
          size={40}
          className="text-yellow-500"
        />

      </div>
    </div>

  </div>

  {/* Table */}

  <div className="
    bg-white
    dark:bg-slate-900
    border
    dark:border-slate-800
    rounded-3xl
    overflow-hidden
    shadow-sm
  ">

    <div className="p-6 border-b dark:border-slate-800">

      <h2 className="text-2xl font-bold">
        All Documents
      </h2>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-50 dark:bg-slate-800">

          <tr>
            <th className="p-5 text-left">
              Document
            </th>

            <th className="p-5 text-left">
              Status
            </th>

            <th className="p-5 text-left">
              Created
            </th>

            <th className="p-5 text-right">
              Actions
            </th>
          </tr>

        </thead>

        <tbody>

          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="
                border-t
                dark:border-slate-800
                hover:bg-slate-50
                dark:hover:bg-slate-800
                transition
              "
            >
              <td className="p-5 font-medium">
                {doc.title}
              </td>

              <td className="p-5">

                <span
                  className={`px-4 py-1 rounded-full text-xs font-semibold ${
                    doc.status === "SIGNED"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {doc.status}
                </span>

              </td>

              <td className="p-5 text-slate-500">
                {new Date(
                  doc.createdAt
                ).toLocaleDateString()}
              </td>

              <td className="p-5 text-right">

                <div className="flex justify-end gap-2">

                  <Link
                    href={`/documents/${doc.id}`}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-slate-100
                      dark:bg-slate-800
                    "
                  >
                    View
                  </Link>

                  <Link
                    href={`/sign/${doc.id}`}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-blue-600
                      text-white
                    "
                  >
                    Sign
                  </Link>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  </div>

</div>
       </PageWithSidebar>
);
}
