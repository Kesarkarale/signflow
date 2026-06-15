"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
const router = useRouter();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] =
useState("");
const [confirmPassword,
setConfirmPassword] = useState("");

const [showPassword,
setShowPassword] = useState(false);

const [showConfirmPassword,
setShowConfirmPassword] =
useState(false);

const [loading, setLoading] =
useState(false);

async function handleRegister(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();

if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}

setLoading(true);

const response = await fetch(
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
  alert(
    data.error ||
      "Registration failed"
  );
  return;
}

alert(
  "Account created successfully"
);

router.push("/login");

}

return ( <div className="min-h-screen grid lg:grid-cols-2 bg-background">

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

  <div className="flex items-center justify-center p-6">

    <div className="w-full max-w-md bg-white dark:bg-slate-900 border rounded-3xl shadow-2xl p-8">

      <h2 className="text-4xl font-bold mb-2">
        Create Account
      </h2>

      <p className="text-slate-500 mb-8">
        Start your digital
        signing journey today.
      </p>

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
            setName(e.target.value)
          }
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

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

        <div className="relative">

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm Password"
            required
            value={confirmPassword}
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          {loading
            ? "Creating..."
            : "Create Account"}
        </button>

      </form>

      <div className="text-center mt-6">

        <p className="text-slate-500">
          Already have an account?
        </p>

        <Link
          href="/login"
          className="text-blue-600 font-semibold"
        >
          Sign In
        </Link>

      </div>

    </div>

  </div>

</div>
);
}

