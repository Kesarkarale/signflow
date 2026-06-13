"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
const router = useRouter();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] =
useState("");

const [loading, setLoading] = useState(false);

async function handleRegister(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();

```
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

const data = await response.json();

setLoading(false);

if (!response.ok) {
  alert(
    data.error || "Registration failed"
  );
  return;
}

alert("Account created successfully");

router.push("/login");
```

}

return ( <div className="min-h-screen grid lg:grid-cols-2"> <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-green-600 via-green-700 to-slate-900 text-white p-16"> <h1 className="text-6xl font-bold mb-6">
Join SignFlow </h1>

```
    <p className="text-xl opacity-90 max-w-lg">
      Create your account and
      start signing documents
      securely from anywhere.
    </p>

    <div className="mt-12 space-y-4">
      <div className="bg-white/10 p-5 rounded-xl">
        🚀 Unlimited Document
        Uploads
      </div>

      <div className="bg-white/10 p-5 rounded-xl">
        🔒 Secure Cloud Storage
      </div>

      <div className="bg-white/10 p-5 rounded-xl">
        📄 Digital Signatures &
        Audit Logs
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center bg-slate-50 p-8">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-2">
        Create Account
      </h2>

      <p className="text-gray-500 mb-8">
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
          className="w-full border rounded-xl p-3"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
        >
          {loading
            ? "Creating..."
            : "Create Account"}
        </button>
      </form>

      <p className="text-center mt-6 text-gray-500">
        Already have an account?
        <a
          href="/login"
          className="text-green-600 font-semibold ml-2"
        >
          Login
        </a>
      </p>

    </div>
  </div>
</div>

);
}
