"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import {
LayoutDashboard,
FileText,
Upload,
ShieldCheck,
Settings,
LogOut,
Sparkles,
} from "lucide-react";

const links = [
{
name: "Dashboard",
href: "/dashboard",
icon: LayoutDashboard,
},
{
name: "Documents",
href: "/documents",
icon: FileText,
},
{
name: "Upload",
href: "/upload",
icon: Upload,
},
{
name: "Audit Logs",
href: "/audit",
icon: ShieldCheck,
},
{
name: "Settings",
href: "/settings",
icon: Settings,
},
];

export default function Sidebar() {
const pathname = usePathname();

return ( <aside className="
   w-72
   min-h-screen
   bg-slate-950
   text-white
   flex
   flex-col
   border-r
   border-slate-800
 ">
 
  <div className="p-8 border-b border-slate-800">

    <div className="flex items-center gap-3">

      <div className="
        h-12
        w-12
        rounded-2xl
        bg-gradient-to-r
        from-blue-500
        to-indigo-600
        flex
        items-center
        justify-center
        shadow-lg
      ">
        <Sparkles size={22} />
      </div>

      <div>
        <h1 className="text-2xl font-bold">
          SignFlow
        </h1>

        <p className="text-slate-400 text-sm">
          Professional E-Sign
        </p>
      </div>

    </div>

  </div>

  <div className="p-6 border-b border-slate-800">

    <div className="flex items-center gap-4">

      <div className="
        relative
        h-14
        w-14
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-indigo-600
        flex
        items-center
        justify-center
        text-lg
        font-bold
      ">
        K

        <span className="
          absolute
          bottom-0
          right-0
          h-4
          w-4
          rounded-full
          bg-green-500
          border-2
          border-slate-950
        " />
      </div>

      <div>
        <h3 className="font-semibold">
          Kesar Karale
        </h3>

        <p className="text-slate-400 text-sm">
          Administrator
        </p>
      </div>

    </div>

    <div className="
      mt-4
      bg-blue-600/15
      border
      border-blue-500/30
      rounded-xl
      p-3
    ">
      <p className="text-sm text-blue-300">
        ⭐ Pro Workspace
      </p>
    </div>

  </div>

  <nav className="flex-1 p-5 space-y-2">

    {links.map((link) => {
      const Icon = link.icon;
      const active =
        pathname === link.href;

      return (
        <Link
          key={link.href}
          href={link.href}
          className={`
            group
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-2xl
            transition-all
            duration-200
            ${
              active
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }
          `}
        >
          <Icon size={20} />

          <span className="font-medium">
            {link.name}
          </span>
        </Link>
      );
    })}

  </nav>

  <div className="p-5 border-t border-slate-800">

    <button
      onClick={() => signOut()}
      className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        bg-red-600
        hover:bg-red-700
        py-3
        rounded-2xl
        font-medium
        transition-all
      "
    >
      <LogOut size={18} />

      Logout
    </button>

  </div>

</aside>
);
}
