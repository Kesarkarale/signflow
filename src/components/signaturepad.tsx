"use client";

import SignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";
import {
  Eraser,
  Save,
  PenTool,
  RotateCcw,
} from "lucide-react";

interface SignaturePadProps {
  documentId: string;
  signerId: string;
}

export default function SignaturePad({
  documentId,
  signerId,
}: SignaturePadProps) {
  const sigRef =
    useRef<SignatureCanvas | null>(
      null
    );

  const [loading, setLoading] =
    useState(false);

  const clearSignature = () => {
    sigRef.current?.clear();
  };

  const resetSignature = () => {
    sigRef.current?.clear();
  };

  const saveSignature =
    async () => {
      if (
        !sigRef.current ||
        sigRef.current.isEmpty()
      ) {
        alert(
          "Please draw your signature first."
        );
        return;
      }

      setLoading(true);

      try {
        const data =
          sigRef.current
            .getTrimmedCanvas()
            .toDataURL(
              "image/png"
            );

        const res = await fetch(
          "/api/signature",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              documentId,
              signerId,
              signatureImage:
                data,
            }),
          }
        );

        if (!res.ok) {
          throw new Error();
        }

        alert(
          "Signature saved successfully!"
        );

        window.location.reload();
      } catch {
        alert(
          "Failed to save signature"
        );
      }

      setLoading(false);
    };

  return (
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
      <div className="flex items-center gap-3 mb-6">
        <div
          className="
          h-12
          w-12
          rounded-2xl
          bg-gradient-to-r
          from-blue-500
          to-indigo-600
          text-white
          flex
          items-center
          justify-center
        "
        >
          <PenTool size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Draw Signature
          </h2>

          <p className="text-slate-500 text-sm">
            Sign using mouse
            or touch.
          </p>
        </div>
      </div>

      <div
        className="
        border-2
        border-dashed
        border-slate-300
        rounded-2xl
        overflow-hidden
        bg-white
      "
      >
        <SignatureCanvas
          ref={sigRef}
          penColor="black"
          canvasProps={{
            width: 700,
            height: 250,
            className:
              "w-full bg-white",
          }}
        />
      </div>

      <div className="mt-6 flex gap-3 flex-wrap">
        <button
          onClick={
            clearSignature
          }
          className="
          flex
          items-center
          gap-2
          bg-red-500
          text-white
          px-5
          py-3
          rounded-2xl
        "
        >
          <Eraser size={18} />
          Clear
        </button>

        <button
          onClick={
            resetSignature
          }
          className="
          flex
          items-center
          gap-2
          bg-amber-500
          text-white
          px-5
          py-3
          rounded-2xl
        "
        >
          <RotateCcw size={18} />
          Reset
        </button>

        <button
          onClick={
            saveSignature
          }
          disabled={loading}
          className="
          flex
          items-center
          gap-2
          bg-green-600
          text-white
          px-5
          py-3
          rounded-2xl
        "
        >
          <Save size={18} />

          {loading
            ? "Saving..."
            : "Save Signature"}
        </button>
      </div>

      <div
        className="
        mt-6
        p-4
        rounded-2xl
        bg-blue-50
      "
      >
        🔒 Signature is linked
        to audit logs.
      </div>
    </div>
  );
}
