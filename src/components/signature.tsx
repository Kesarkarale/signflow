"use client";

import { useState } from "react";

export default function Signature() {
  const [signature, setSignature] =
    useState("");

  return (
    <div className="bg-white p-6 rounded-xl border">
      <h3 className="font-semibold mb-4">
        Your Signature
      </h3>

      <input
        value={signature}
        onChange={(e) =>
          setSignature(e.target.value)
        }
        placeholder="Type Signature"
        className="w-full border p-3 rounded-lg"
      />

      <div className="mt-6 text-3xl font-serif">
        {signature}
      </div>
    </div>
  );
}
