"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] =
    useState<File | null>(null);

  async function uploadPdf() {
    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    alert("Upload Started");
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Upload Document
      </h1>

      <div className="bg-white p-8 rounded-2xl border">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
        />

        <button
          onClick={uploadPdf}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Upload PDF
        </button>
      </div>
    </div>
  );
}
