"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

async function handleLogin(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();

setLoading(true);

const result = await signIn("credentials", {
  email,
  password,
  redirect: false,
});

setLoading(false);

if (result?.error) {
  alert("Invalid email or password");
  return;
}

window.location.href = "/dashboard";

}

return ( <div className="min-h-screen grid lg:grid-cols-2 bg-background">

  <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">
    <h1 className="text-6xl font-bold mb-6">
      SignFlow
    </h1>

    <p className="text-xl opacity-90 max-w-lg">
      Secure, fast and professional document
      signing platform for teams and businesses.
    </p>

    <div className="mt-12 space-y-4">
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
        🔒 Secure Digital Signatures
      </div>

      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
        📄 Manage Documents Easily
      </div>

      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
        ⚡ Real-Time Audit Tracking
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center p-6">
    <div className="w-full max-w-md bg-white dark:bg-slate-900 border rounded-3xl shadow-2xl p-8">

      <h2 className="text-4xl font-bold mb-2">
        Welcome Back
      </h2>

      <p className="text-slate-500 mb-8">
        Sign in to continue to SignFlow
      </p>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="••••••••"
          />
        </div>

        <div className="flex justify-between text-sm">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <Link
            href="#"
            className="text-blue-600"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          {loading
            ? "Signing In..."
            : "Sign In"}
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-slate-500">
          Don't have an account?
        </p>

        <Link
          href="/register"
          className="text-blue-600 font-semibold"
        >
          Create Account
        </Link>
      </div>
    </div>
  </div>
</div>
);
}
