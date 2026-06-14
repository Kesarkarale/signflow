"use client";

import { signOut } from "next-auth/react";
import { LogOut, Settings, User } from "lucide-react";

export default function UserMenu() {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          K
        </div>

        <div>
          <p className="font-semibold">
            Kesar Karale
          </p>

          <p className="text-sm text-slate-500">
            Admin
          </p>
        </div>
      </div>

      <div className="space-y-2">

        <a
          href="/settings"
          className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-lg"
        >
          <Settings size={16} />
          Settings
        </a>

        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 p-2 text-red-600 w-full hover:bg-red-50 rounded-lg"
        >
          <LogOut size={16} />
          Logout
        </button>

      </div>

    </div>
  );
}
