"use client";

import { useState } from "react";
import {
User,
Mail,
Lock,
Shield,
Bell,
Trash2,
Moon,
CheckCircle2,
} from "lucide-react";

export default function SettingsPage() {
const [name, setName] =
useState("Kesar Karale");

const [email, setEmail] =
useState("[kesar@example.com](mailto:kesar@example.com)");

return ( <div className="p-8 space-y-8">

  {/* Hero */}

  <div
    className="
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-purple-600
    rounded-3xl
    p-8
    text-white
    shadow-xl
  "
  >

    <h1 className="text-4xl font-bold">
      Settings ⚙️
    </h1>

    <p className="text-blue-100 mt-3">
      Manage your SignFlow account,
      security and preferences.
    </p>

  </div>

  {/* Profile + Security */}

  <div className="grid lg:grid-cols-2 gap-6">

    {/* Profile */}

    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      dark:border-slate-800
      rounded-3xl
      p-8
      shadow-sm
    "
    >

      <h2 className="text-2xl font-bold mb-6">
        Profile Information
      </h2>

      <div className="space-y-5">

        <div>

          <label className="flex items-center gap-2 mb-2 font-medium">
            <User size={18} />
            Full Name
          </label>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              dark:border-slate-700
              bg-transparent
              px-4
              py-4
            "
          />

        </div>

        <div>

          <label className="flex items-center gap-2 mb-2 font-medium">
            <Mail size={18} />
            Email
          </label>

          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              dark:border-slate-700
              bg-transparent
              px-4
              py-4
            "
          />

        </div>

        <button
          className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-4
          rounded-2xl
          font-semibold
          transition
          "
        >
          Save Changes
        </button>

      </div>

    </div>

    {/* Password */}

    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      dark:border-slate-800
      rounded-3xl
      p-8
      shadow-sm
    "
    >

      <h2 className="text-2xl font-bold mb-6">
        Security
      </h2>

      <div className="space-y-5">

        <input
          type="password"
          placeholder="Current Password"
          className="
            w-full
            rounded-2xl
            border
            dark:border-slate-700
            bg-transparent
            px-4
            py-4
          "
        />

        <input
          type="password"
          placeholder="New Password"
          className="
            w-full
            rounded-2xl
            border
            dark:border-slate-700
            bg-transparent
            px-4
            py-4
          "
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="
            w-full
            rounded-2xl
            border
            dark:border-slate-700
            bg-transparent
            px-4
            py-4
          "
        />

        <button
          className="
          w-full
          bg-green-600
          hover:bg-green-700
          text-white
          py-4
          rounded-2xl
          font-semibold
          transition
          "
        >
          Update Password
        </button>

      </div>

    </div>

  </div>

  {/* Preferences */}

  <div
    className="
    bg-white
    dark:bg-slate-900
    border
    dark:border-slate-800
    rounded-3xl
    p-8
    shadow-sm
  "
  >

    <h2 className="text-2xl font-bold mb-6">
      Preferences
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="border dark:border-slate-800 rounded-2xl p-5">
        <Bell className="mb-4 text-blue-600" />

        <h3 className="font-semibold">
          Notifications
        </h3>

        <p className="text-slate-500 text-sm mt-2">
          Receive updates for signatures
          and documents.
        </p>
      </div>

      <div className="border dark:border-slate-800 rounded-2xl p-5">
        <Moon className="mb-4 text-indigo-600" />

        <h3 className="font-semibold">
          Dark Mode
        </h3>

        <p className="text-slate-500 text-sm mt-2">
          Switch between light and dark
          appearance.
        </p>
      </div>

      <div className="border dark:border-slate-800 rounded-2xl p-5">
        <Shield className="mb-4 text-green-600" />

        <h3 className="font-semibold">
          Security
        </h3>

        <p className="text-slate-500 text-sm mt-2">
          Two-factor authentication and
          account protection.
        </p>
      </div>

    </div>

  </div>

  {/* Account Status */}

  <div
    className="
    bg-white
    dark:bg-slate-900
    border
    dark:border-slate-800
    rounded-3xl
    p-8
  "
  >

    <div className="flex items-center gap-3 mb-4">

      <CheckCircle2 className="text-green-500" />

      <h2 className="text-2xl font-bold">
        Account Status
      </h2>

    </div>

    <p className="text-slate-500">
      Your account is active and your
      workspace is running normally.
    </p>

  </div>

  {/* Danger Zone */}

  <div
    className="
    bg-white
    dark:bg-slate-900
    border
    border-red-300
    dark:border-red-900
    rounded-3xl
    p-8
  "
  >

    <div className="flex items-center gap-3 mb-4">

      <Trash2 className="text-red-500" />

      <h2 className="text-2xl font-bold text-red-600">
        Danger Zone
      </h2>

    </div>

    <p className="text-slate-500 mb-6">
      Permanently delete your account and
      all documents.
    </p>

    <button
      className="
      bg-red-600
      hover:bg-red-700
      text-white
      px-6
      py-3
      rounded-2xl
      font-semibold
      "
    >
      Delete Account
    </button>

  </div>

</div>
);
}
