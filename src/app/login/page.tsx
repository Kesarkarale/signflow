"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    const result = await signIn(
      "credentials",
      {
        email,
        password,
        redirect: false,
      }
    );

    setLoading(false);

    if (result?.error) {
      setError(
        "Invalid email or password"
      );
      return;
    }

    setSuccess(
      "Login successful. Redirecting..."
    );

    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 1200);
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">

      {/* LEFT */}
      <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">

        <h1 className="text-6xl font-bold mb-6">
          SignFlow
        </h1>

        <p className="text-xl opacity-90 max-w-lg">
          Secure, fast and professional
          document signing platform.
        </p>

        <div className="mt-12 space-y-4">

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
            🔒 Secure Digital Signatures
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
            📄 Manage Documents Easily
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
            ⚡ Real-Time Audit Tracking
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white dark:bg-slate-900 border rounded-3xl shadow-2xl p-8">

          <h2 className="text-4xl font-bold mb-2">
            Welcome Back
          </h2>

          <p className="text-slate-500 mb-8">
            Sign in to continue to
            SignFlow
          </p>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-600 p-3 rounded-xl text-sm">
              {success}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
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
