"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Kesar Karale");
  const [email, setEmail] = useState("kesar@example.com");

  return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your SignFlow account.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Profile */}
        <div className="bg-white rounded-3xl border shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Profile Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border rounded-xl p-4"
              />
            </div>

            <button
              className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-blue-700
              "
            >
              Save Changes
            </button>

          </div>
        </div>

        {/* Password */}
        <div className="bg-white rounded-3xl border shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Change Password
          </h2>

          <div className="space-y-5">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-xl p-4"
            />

            <button
              className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-green-700
              "
            >
              Update Password
            </button>

          </div>
        </div>

      </div>

      {/* Account Section */}

      <div className="mt-8 bg-white rounded-3xl border shadow-sm p-8">

        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Danger Zone
        </h2>

        <p className="text-slate-500 mb-6">
          Permanently delete your account and all documents.
        </p>

        <button
          className="
          bg-red-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-red-700
          "
        >
          Delete Account
        </button>

      </div>

    </div>
  );
}
