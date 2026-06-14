"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Documents",
    href: "/documents",
  },
  {
    name: "Upload",
    href: "/upload",
  },
  {
    name: "Audit Logs",
    href: "/audit",
  },
  {
    name: "Settings",
    href: "/settings",
  },
  {
    name: "logout",
    href: "/logout",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        SignFlow
      </h1>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-3 rounded-xl transition ${
              pathname === link.href
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="mt-10 border-t border-slate-700 pt-6">
        <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl">
          Logout
        </button>
      </div>
    </aside>
  );
}
