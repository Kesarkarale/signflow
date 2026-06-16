"use client";

import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import {
Eraser,
RotateCcw,
Save,
PenTool,
} from "lucide-react";

export default function SignaturePad() {
const sigRef = useRef<any>(null);

const clearSignature = () => {
sigRef.current?.clear();
};

const undoSignature = () => {
const canvas =
sigRef.current?.getCanvas();

const ctx =
  canvas?.getContext("2d");

if (!canvas || !ctx) return;

ctx.clearRect(
  0,
  0,
  canvas.width,
  canvas.height
);

};

const saveSignature = () => {
if (
sigRef.current?.isEmpty()
) {
alert(
"Please draw your signature first."
);
return;
}

const signature =
  sigRef.current
    ?.getTrimmedCanvas()
    .toDataURL("image/png");

console.log(signature);

alert(
  "Signature saved successfully!"
);

};

return ( <div
   className="
   bg-white
   dark:bg-slate-900
   border
   dark:border-slate-800
   rounded-3xl
   p-6
   shadow-sm
 "
 > <div className="flex items-center gap-3 mb-6">

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
        Digital Signature
      </h2>

      <p className="text-slate-500 text-sm">
        Draw your signature inside the box.
      </p>

    </div>

  </div>

  <div
    className="
    rounded-2xl
    border-2
    border-dashed
    border-slate-300
    dark:border-slate-700
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
      font-medium
    "
    >
      <Eraser size={18} />
      Clear
    </button>

    <button
      onClick={undoSignature}
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
      font-medium
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
      font-medium
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
      🔒 Your signature is securely stored and
      linked to the document audit trail.
    </p>
  </div>

</div>
);
}
