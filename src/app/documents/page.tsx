import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function DocumentsPage() {
  const docs =
    await prisma.document.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Documents
      </h1>

      <div className="bg-white rounded-2xl border overflow-hidden">
        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                Title
              </th>
              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {docs.map((doc) => (
              <tr
                key={doc.id}
                className="border-b"
              >
                <td className="p-4">
                  {doc.title}
                </td>

                <td className="p-4">
                  {doc.status}
                </td>

                <td className="p-4">
                  <Link
                    href={`/sign/${doc.id}`}
                    className="text-blue-600"
                  >
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
