import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
      <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-black text-white p-12">
          <h1 className="text-5xl font-bold mb-6">
            SignFlow
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Securely upload, sign and manage your documents
            from anywhere. Fast, secure and professional.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-white/10 backdrop-blur">
            <p className="text-gray-300">
              Trusted by freelancers, startups and businesses
              to manage contracts and documents online.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-14">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to your account
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex justify-between text-sm">
                <label className="flex gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
              >
                Sign In
              </button>

              <button
                type="button"
                className="w-full border py-4 rounded-xl font-medium hover:bg-gray-50"
              >
                Continue with Google
              </button>
            </form>

            <p className="text-center mt-8 text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-black"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}