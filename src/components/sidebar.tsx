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

  return (
    <aside className="w-72 bg-slate-950 text-white min-h-screen flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold">
          SignFlow
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          E-Signature Platform
        </p>
      </div>

      {/* User */}

      <div className="p-6 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
            K
          </div>

          <div>
            <h3 className="font-semibold">
              Kesar Karale
            </h3>

            <p className="text-slate-400 text-sm">
              Admin
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-5 space-y-2">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition-all
                ${
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }
              `}
            >
              <Icon size={20} />

              <span>
                {link.name}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Footer */}

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
            px-4
            py-3
            rounded-xl
            transition
          "
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </aside>
  );
}
