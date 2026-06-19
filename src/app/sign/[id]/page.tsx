 import SignaturePad from "@/components/signature-canvas";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default async function SignPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const session =
    await getServerSession(authConfig);

  const document =
    await prisma.document.findUnique({
      where: {
        id,
      },
    });

  if (!document) {
    return (
      <div className="p-10">
        Document not found
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-slate-950 p-8">

    <div className="max-w-7xl mx-auto space-y-8">

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
        <div className="flex items-center gap-4">

          <div
            className="
            h-16
            w-16
            rounded-2xl
            bg-white/20
            flex
            items-center
            justify-center
          "
          >
            <FileText size={30} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              {document.title}
            </h1>

            <p className="text-blue-100 mt-2">
              Secure Digital Signature Request
            </p>
          </div>

        </div>

        <div className="flex gap-8 mt-6">

          <div>
            <h3 className="font-bold">
              Status
            </h3>

            <p className="text-blue-100">
              {document.status}
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Document ID
            </h3>

            <p className="text-blue-100">
              {document.id.slice(0, 12)}
            </p>
          </div>

        </div>

      </div>

      {/* Main Layout */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* PDF */}

        <div
          className="
          bg-white
          dark:bg-slate-900
          rounded-3xl
          border
          dark:border-slate-800
          p-6
          shadow-lg
        "
        >
          <h2 className="text-2xl font-bold mb-5">
            PDF Preview
          </h2>

          {document.fileUrl ? (
            <iframe
              src={document.fileUrl}
              className="
              w-full
              h-[750px]
              rounded-2xl
              border
              "
            />
          ) : (
            <div
              className="
              h-[750px]
              rounded-2xl
              border-2
              border-dashed
              flex
              items-center
              justify-center
              text-slate-500
            "
            >
              No PDF Uploaded
            </div>
          )}
        </div>

        {/* Signature */}

        <div
          className="
          bg-white
          dark:bg-slate-900
          rounded-3xl
          border
          dark:border-slate-800
          p-6
          shadow-lg
        "
        >
          <h2 className="text-2xl font-bold mb-5">
            Digital Signature
          </h2>

          <div
            className="
            bg-slate-950
            rounded-3xl
            p-6
            text-white
          "
          >

            <div className="mb-6">

              <h3 className="text-3xl font-bold">
                Sign Document
              </h3>

              <p className="text-slate-400 mt-2">
                Draw your signature below
              </p>

            </div>

            <SignaturePad
              documentId={document.id}
              signerId={session?.user?.id || ""}
            />

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="text-green-500"
                  size={20}
                />
                <span>
                  Securely Stored
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-blue-500"
                  size={20}
                />
                <span>
                  Audit Trail Enabled
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-purple-500"
                  size={20}
                />
                <span>
                  Legally Binding Signature
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
{/* Go to Dashboard Button */}
<div className="max-w-7xl mx-auto mt-10 flex justify-center">
  <a
    href="/dashboard"
    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
  >
    Go to Dashboard
  </a>
</div>
  </div>
);
}
