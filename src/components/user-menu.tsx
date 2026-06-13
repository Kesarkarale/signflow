"use client";

import { signOut } from "next-auth/react";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
        U
      </div>

      <button
        onClick={() =>
          signOut({
            callbackUrl: "/login",
          })
        }
        className="bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
