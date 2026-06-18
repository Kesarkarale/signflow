"use client";

import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
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
    useRef<SignatureCanvas | null>(null);

  const clearSignature = () => {
    sigRef.current?.clear();
  };

  const resetSignature = () => {
    sigRef.current?.clear();
  };

  const saveSignature = async () => {
    if (
      !sigRef.current ||
      sigRef.current.isEmpty()
    ) {
      alert(
        "Please draw your signature first."
      );
      return;
    }

    const data =
      sigRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

    try {
      const res = await fetch(
        "/api/signature",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
         imageUrl: data
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      alert(
        "Signature saved successfully!"
      );
    } catch {
      alert(
        "Failed to save signature"
      );
    }
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
            Sign naturally using your mouse
            or touch device.
          </p>
        </div>
      </div>

      <div
        className="
        border-2
        border-dashed
        border-slate-300
        dark:border-slate-700
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

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={clearSignature}
          className="
          flex
          items-center
          gap-2
          bg-red-500
          hover:bg-red-600
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
          onClick={resetSignature}
          className="
          flex
          items-center
          gap-2
          bg-amber-500
          hover:bg-amber-600
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
          onClick={saveSignature}
          className="
          flex
          items-center
          gap-2
          bg-green-600
          hover:bg-green-700
          text-white
          px-5
          py-3
          rounded-2xl
        "
        >
          <Save size={18} />
          Save Signature
        </button>
      </div>

      <div
        className="
        mt-6
        p-4
        rounded-2xl
        bg-blue-50
        dark:bg-slate-800
      "
      >
        <p className="text-sm text-slate-600 dark:text-slate-300">
          🔒 Your signature is securely stored
          and linked to the document audit log.
        </p>
      </div>
    </div>
  );
}
