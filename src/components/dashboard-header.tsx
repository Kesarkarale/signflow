 import Link from "next/link";
import {
Bell,
Upload,
Search,
} from "lucide-react";

export default function DashboardHeader() {
return ( <div
   className="
   flex
   flex-col
   lg:flex-row
   lg:items-center
   lg:justify-between
   gap-6
   mb-2
 "
 > <div>

    <h1 className="text-4xl font-bold">
      Dashboard
    </h1>

    <p className="text-slate-500 mt-2">
      Welcome back to SignFlow 👋
    </p>

  </div>

  <div className="flex items-center gap-3">

    <div className="relative hidden md:block">

      <Search
        size={18}
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-slate-400
      "
      />

      <input
        type="text"
        placeholder="Search documents..."
        className="
          pl-11
          pr-4
          py-3
          rounded-2xl
          border
          dark:border-slate-700
          bg-white
          dark:bg-slate-900
          outline-none
          w-72
        "
      />

    </div>

    <button
      className="
      h-12
      w-12
      rounded-2xl
      border
      dark:border-slate-700
      bg-white
      dark:bg-slate-900
      flex
      items-center
      justify-center
      hover:bg-slate-50
      dark:hover:bg-slate-800
      transition
    "
    >
      <Bell size={20} />
    </button>

    <Link
      href="/upload"
      className="
      flex
      items-center
      gap-2
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-5
      py-3
      rounded-2xl
      font-semibold
      transition
    "
    >
      <Upload size={18} />
      Upload PDF
    </Link>
<Link
  href="/create-document"
  className="
  bg-purple-600
  text-white
  px-4
  py-2
  rounded-xl
"
>
  Create PDF
</Link>
  </div>

</div>

);
}

