"use client";

import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

export default function SignaturePad() {
  const sigRef = useRef<any>(null);

  function clear() {
    sigRef.current?.clear();
  }

  function save() {
    const data =
      sigRef.current
        ?.getTrimmedCanvas()
        .toDataURL("image/png");

    console.log(data);

    alert("Signature Saved");
  }

  return (
    <div>

      <SignatureCanvas
        ref={sigRef}
        penColor="black"
        canvasProps={{
          width: 600,
          height: 200,
          className:
            "border rounded-xl bg-white",
        }}
      />

      <div className="mt-4 flex gap-3">

        <button
          onClick={clear}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Clear
        </button>

        <button
          onClick={save}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Save Signature
        </button>

      </div>

    </div>
  );
}
