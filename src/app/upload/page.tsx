"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

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
          ownerId: "TEMP_USER_ID",
        }),
      }
    );

    setLoading(false);

    if (res.ok) {
      router.push("/documents");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white rounded-3xl shadow border p-8">
        <h1 className="text-4xl font-bold mb-2">
          Upload Document
        </h1>

        <p className="text-slate-500 mb-8">
          Upload a PDF document for
          digital signing.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Document Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="w-full border rounded-xl p-4"
              placeholder="Employment Agreement"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              PDF URL
            </label>

            <input
              value={fileUrl}
              onChange={(e) =>
                setFileUrl(
                  e.target.value
                )
              }
              className="w-full border rounded-xl p-4"
              placeholder="https://..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            {loading
              ? "Uploading..."
              : "Create Document"}
          </button>
        </form>
      </div>
    </div>
  );
}
