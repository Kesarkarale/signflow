"use client";

import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const res = await fetch("/api/documents", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    alert("Uploaded Successfully");
    console.log(data);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Document</h1>

      <input
        placeholder="Document Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload PDF
      </button>
    </div>
  );
}
