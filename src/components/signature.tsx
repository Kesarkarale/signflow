"use client";

import { useState } from "react";
import {
Type,
CheckCircle2,
} from "lucide-react";

export default function Signature() {
const [signature, setSignature] =
useState("");

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
      <Type size={22} />
    </div>

    <div>

      <h3 className="text-xl font-bold">
        Typed Signature
      </h3>

      <p className="text-slate-500 text-sm">
        Create a digital signature using text.
      </p>

    </div>

  </div>

  <input
    value={signature}
    onChange={(e) =>
      setSignature(e.target.value)
    }
    placeholder="Enter your full name"
    className="
      w-full
      border
      dark:border-slate-700
      rounded-2xl
      p-4
      bg-transparent
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
    "
  />

  <div
    className="
    mt-8
    border-2
    border-dashed
    border-slate-300
    dark:border-slate-700
    rounded-2xl
    p-8
    min-h-[120px]
    flex
    items-center
    justify-center
  "
  >
    <span
      className="
      text-5xl
      font-serif
      text-slate-800
      dark:text-white
    "
    >
      {signature || "Your Signature"}
    </span>
  </div>

  <div
    className="
    mt-6
    flex
    items-center
    gap-2
    text-green-600
    font-medium
  "
  >
    <CheckCircle2 size={18} />
    Digital Signature Preview
  </div>
</div>
);
}
