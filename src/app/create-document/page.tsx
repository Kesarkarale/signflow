"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateDocumentPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function createDocument() {
    setLoading(true);

    const res = await fetch(
      "/api/documents/create-text",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );

    const data = await res.json();

    setLoading(false);

    if (res.ok) {
      router.push(`/documents/${data.id}`);
    }
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        Create PDF Document
      </h1>

      <div className="bg-white border rounded-3xl p-8">

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Document Title"
          className="
            w-full
            border
            rounded-xl
            p-4
            mb-6
          "
        />

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          placeholder="Write your document..."
          rows={15}
          className="
            w-full
            border
            rounded-xl
            p-4
          "
        />

        <button
          onClick={createDocument}
          disabled={loading}
          className="
            mt-6
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
          "
        >
          {loading
            ? "Creating..."
            : "Create Document"}
        </button>

      </div>

    </div>
  );
}
