"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <aside className="w-72 bg-slate-950 text-white flex flex-col min-h-screen">

      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold">
          SignFlow
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Digital Signature Platform
        </p>
      </div>

      <nav className="flex-1 p-5 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                pathname === link.href
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-5 border-t border-slate-800">
        <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl">
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </aside>
  );
}
