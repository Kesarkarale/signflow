"use client";

import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !file) {
      alert("Please fill all fields");
      return;
    }

    console.log(title, file);

    alert("Upload feature coming next");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border p-8">
        <h1 className="text-3xl font-bold mb-2">
          Upload Document
        </h1>

        <p className="text-gray-500 mb-8">
          Upload PDF documents for signatures
        </p>

        <form
          onSubmit={handleUpload}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Document Title
            </label>

            <input
              type="text"
              placeholder="Employment Agreement"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              PDF File
            </label>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(
                  e.target.files?.[0] || null
                )
              }
              className="w-full border rounded-xl p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
          >
            Upload Document
          </button>
        </form>
      </div>
    </div>
  );
}
