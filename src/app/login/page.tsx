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
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
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

    // ✅ IMPORTANT: use router instead of window.location
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">
        <h1 className="text-6xl font-bold mb-6">SignFlow</h1>

        <p className="text-xl opacity-90 max-w-lg">
          Secure, fast and professional document signing platform.
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

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white dark:bg-slate-900 border rounded-3xl shadow-2xl p-8">

          <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>

          <p className="text-slate-500 mb-8">
            Sign in to continue to SignFlow
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link href="#" className="text-blue-600">
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* REGISTER */}
          <div className="text-center mt-6">
            <p className="text-slate-500">Don't have an account?</p>

            <Link href="/register" className="text-blue-600 font-semibold">
              Create Account
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
