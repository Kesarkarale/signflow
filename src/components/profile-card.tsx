 import {
  Crown,
  Mail,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function ProfileCard() {
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
      h-fit
    "
    >
      <div className="text-center">

        <div
          className="
          relative
          w-24
          h-24
          mx-auto
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          flex
          items-center
          justify-center
          text-white
          text-3xl
          font-bold
          shadow-lg
        "
        >
          K

          <span
            className="
            absolute
            bottom-1
            right-1
            w-5
            h-5
            bg-green-500
            rounded-full
            border-2
            border-white
          "
          />
        </div>

        <h2 className="text-2xl font-bold mt-5">
          Kesar Karale
        </h2>

        <p className="text-slate-500">
          Administrator
        </p>

        <div
          className="
          inline-flex
          items-center
          gap-2
          mt-4
          bg-amber-100
          text-amber-700
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
        "
        >
          <Crown size={16} />
          Premium Workspace
        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div
          className="
          flex
          items-center
          gap-3
          p-4
          rounded-2xl
          bg-slate-50
          dark:bg-slate-800
        "
        >
          <Mail
            size={18}
            className="text-blue-600"
          />

          <div>
            <p className="text-xs text-slate-500">
              Email
            </p>

            <p className="font-medium">
              kesar@example.com
            </p>
          </div>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          p-4
          rounded-2xl
          bg-slate-50
          dark:bg-slate-800
        "
        >
          <FileText
            size={18}
            className="text-green-600"
          />

          <div>
            <p className="text-xs text-slate-500">
              Documents Managed
            </p>

            <p className="font-medium">
              Unlimited
            </p>
          </div>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          p-4
          rounded-2xl
          bg-slate-50
          dark:bg-slate-800
        "
        >
          <ShieldCheck
            size={18}
            className="text-purple-600"
          />

          <div>
            <p className="text-xs text-slate-500">
              Security
            </p>

            <p className="font-medium">
              Audit Protected
            </p>
          </div>
        </div>

      </div>

      <button
        className="
        mt-6
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-3
        rounded-2xl
        font-semibold
        transition
      "
      >
        Manage Profile
      </button>

    </div>
  );
}
