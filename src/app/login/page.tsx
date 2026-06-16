 "use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

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

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50 dark:bg-slate-950">

      {/* Left Side */}

      <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">

        <div className="max-w-xl">

          <h1 className="text-6xl font-bold mb-6">
            SignFlow
          </h1>

          <p className="text-xl text-blue-100">
            Professional Digital Signature
            Platform for secure document
            management.
          </p>

          <div className="mt-12 space-y-5">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
              🔒 Secure Authentication
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
              📄 Smart Document Management
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
              ⚡ Real-Time Audit Tracking
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-3xl shadow-2xl p-8">

          <div className="flex justify-center mb-5">

            <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
              <ShieldCheck size={30} />
            </div>

          </div>

          <h2 className="text-4xl font-bold text-center">
            Welcome Back
          </h2>

          <p className="text-slate-500 text-center mt-2 mb-8">
            Sign in to continue to SignFlow
          </p>

          {error && (
            <div className="mb-5 bg-red-100 text-red-600 border border-red-200 rounded-xl p-3">
              {error}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border dark:border-slate-700 rounded-xl px-4 py-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border dark:border-slate-700 rounded-xl px-4 py-3 pr-12 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </button>

          </form>

          <div className="mt-8 text-center">

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
