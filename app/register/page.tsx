import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
      <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left */}
        <div className="hidden lg:flex flex-col justify-center bg-black text-white p-12">
          <h1 className="text-5xl font-bold mb-6">
            Join SignFlow
          </h1>

          <p className="text-lg text-gray-300">
            Create your account and start managing
            documents professionally.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-white/10">
            <h3 className="font-semibold mb-2">
              What you'll get
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✓ Unlimited Document Storage</li>
              <li>✓ Secure Digital Signatures</li>
              <li>✓ Team Collaboration</li>
              <li>✓ PDF Management</li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="p-8 lg:p-14">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold">
              Create Account 🚀
            </h2>

            <p className="text-gray-500 mt-2">
              Start your journey with SignFlow
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

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
                  placeholder="Create Password"
                  className="mt-2 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="mt-2 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <label className="flex gap-2 text-sm">
                <input type="checkbox" />
                I agree to the Terms & Conditions
              </label>

              <button
                className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
              >
                Create Account
              </button>

              <button
                type="button"
                className="w-full border py-4 rounded-xl font-medium hover:bg-gray-50"
              >
                Continue with Google
              </button>
            </form>

            <p className="text-center mt-8 text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-black"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}