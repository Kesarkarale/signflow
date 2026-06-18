"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [messageType,
    setMessageType] =
    useState<"success" | "error" | "">("");

  async function handleRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");

    if (
      password !== confirmPassword
    ) {
      setMessageType("error");
      setMessage(
        "Passwords do not match"
      );
      return;
    }

    setLoading(true);

    try {
      const response =
        await fetch(
          "/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );

      const data =
        await response.json();

      setLoading(false);

      if (!response.ok) {
        setMessageType("error");
        setMessage(
          data.error ||
          "Registration failed"
        );
        return;
      }

      setMessageType("success");
      setMessage(
        "Account created successfully. Redirecting to login..."
      );

      setTimeout(() => {
        router.push("/login");
      }, 2000);

    } catch {
      setLoading(false);

      setMessageType("error");
      setMessage(
        "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">

        <h1 className="text-6xl font-bold mb-6">
          Join SignFlow
        </h1>

        <p className="text-xl opacity-90 max-w-lg">
          Create your account and
          start signing documents
          securely from anywhere.
        </p>

        <div className="mt-12 space-y-4">

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
            🚀 Unlimited Document Uploads
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
            🔒 Secure Cloud Storage
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
            📄 Digital Signatures &
            Audit Logs
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white border rounded-3xl shadow-xl p-8">

          <h2 className="text-4xl font-bold mb-2">
            Create Account
          </h2>

          <p className="text-slate-500 mb-8">
            Start your digital
            signing journey today.
          </p>

          {/* MESSAGE */}
          {message && (
            <div
              className={`mb-6 flex items-start gap-3 p-4 rounded-xl border ${
                messageType === "success"
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-red-50 border-red-200 text-red-700"
              }`}
            >
              {messageType ===
              "success" ? (
                <CheckCircle2
                  size={20}
                  className="mt-0.5"
                />
              ) : (
                <AlertCircle
                  size={20}
                  className="mt-0.5"
                />
              )}

              <span>
                {message}
              </span>
            </div>
          )}

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
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

            <div className="relative">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm Password"
                required
                value={
                  confirmPassword
                }
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-xl font-semibold transition-all"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <div className="text-center mt-8">

            <p className="text-slate-500">
              Already have an account?
            </p>

            <Link
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
