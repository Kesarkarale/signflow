"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
UploadCloud,
FileText,
Link2,
Sparkles,
CheckCircle2,
Shield,
FileCheck,
} from "lucide-react";
import PageWithSidebar from "@/components/PageWithSidebar";

export default function UploadPage() {
const router = useRouter();

const [title, setTitle] = useState("");
const [fileUrl, setFileUrl] = useState("");
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();

setLoading(true);

try {
  const res = await fetch(
    "/api/documents/create",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        fileUrl,
        
      }),
    }
  );

  if (res.ok) {
    setSuccess(true);

    setTimeout(() => {
      router.push("/documents");
    }, 1200);
  }
} catch (error) {
  console.error(error);
}

setLoading(false);

}

return (
  <PageWithSidebar>
  <div className="p-8">

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

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

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
              <UploadCloud size={32} />
            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Upload Document
              </h1>

              <p className="text-blue-100 mt-2">
                Securely upload PDFs and prepare
                them for digital signatures.
              </p>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">
              100%
            </h3>

            <p className="text-blue-100 text-sm">
              Secure
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">
              PDF
            </h3>

            <p className="text-blue-100 text-sm">
              Support
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <h3 className="text-2xl font-bold">
              Audit
            </h3>

            <p className="text-blue-100 text-sm">
              Logs
            </p>
          </div>

        </div>

      </div>

    </div>

    <div className="grid xl:grid-cols-3 gap-6">

      {/* Main Form */}

      <div
        className="
        xl:col-span-2
        bg-white
        dark:bg-slate-900
        border
        dark:border-slate-800
        rounded-3xl
        shadow-sm
        p-8
      "
      >

        <h2 className="text-2xl font-bold mb-6">
          Document Information
        </h2>

        {/* Upload Area */}

        <div
          className="
          border-2
          border-dashed
          border-blue-300
          dark:border-slate-700
          rounded-3xl
          p-10
          text-center
          mb-8
          hover:border-blue-500
          transition
        "
        >

          <UploadCloud
            size={50}
            className="mx-auto mb-4 text-blue-500"
          />

          <h3 className="font-semibold text-lg">
            Drag & Drop PDF Here
          </h3>

          <p className="text-slate-500 mt-2">
            Or paste your PDF URL below
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label
              className="
              flex
              items-center
              gap-2
              mb-2
              font-medium
            "
            >
              <FileText size={18} />
              Document Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              required
              placeholder="Employment Agreement"
              className="
                w-full
                rounded-2xl
                border
                dark:border-slate-700
                bg-transparent
                px-4
                py-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          <div>

            <label
              className="
              flex
              items-center
              gap-2
              mb-2
              font-medium
            "
            >
              <Link2 size={18} />
              PDF URL
            </label>

            <input
              value={fileUrl}
              onChange={(e) =>
                setFileUrl(e.target.value)
              }
              required
              placeholder="https://example.com/document.pdf"
              className="
                w-full
                rounded-2xl
                border
                dark:border-slate-700
                bg-transparent
                px-4
                py-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {success && (
            <div
              className="
              flex
              items-center
              gap-2
              bg-green-100
              text-green-700
              p-4
              rounded-2xl
            "
            >
              <CheckCircle2 size={20} />
              Document Created Successfully
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition
            "
          >
            {loading
              ? "Uploading..."
              : "Create Document"}
          </button>

        </form>

      </div>

      {/* Sidebar */}

      <div className="space-y-6">

        <div
          className="
          bg-white
          dark:bg-slate-900
          border
          dark:border-slate-800
          rounded-3xl
          p-6
          shadow-sm
        "
        >

          <div
            className="
            h-14
            w-14
            rounded-2xl
            bg-gradient-to-r
            from-blue-500
            to-indigo-600
            flex
            items-center
            justify-center
            text-white
            mb-5
          "
          >
            <Sparkles />
          </div>

          <h3 className="text-xl font-bold">
            Pro Tips
          </h3>

          <div className="mt-5 space-y-4">

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-slate-800">
              📄 Upload clean PDF documents.
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-slate-800">
              ✍️ Add multiple signers later.
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-slate-800">
              🔒 Every action is stored in audit logs.
            </div>

          </div>

        </div>

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

          <h3 className="font-bold text-lg mb-4">
            Platform Features
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Shield className="text-green-500" />
              <span>Secure Storage</span>
            </div>

            <div className="flex items-center gap-3">
              <FileCheck className="text-blue-500" />
              <span>Digital Signatures</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-purple-500" />
              <span>Audit Trail Tracking</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>
  </PageWithSidebar> 
);
}
