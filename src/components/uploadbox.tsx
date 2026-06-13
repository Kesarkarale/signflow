"use client";

import { useState } from "react";

export default function UploadBox() {
  const [file, setFile] = useState<File | null>(
    null
  );

  return (
    <div className="bg-white border-2 border-dashed rounded-2xl p-10 text-center">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] || null
          )
        }
      />

      {file && (
        <p className="mt-4">
          Selected: {file.name}
        </p>
      )}
    </div>
  );
}
