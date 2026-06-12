import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="font-bold text-2xl">
            SignFlow
          </h1>

          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-4 py-2 border rounded-lg"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold">
          Sign Documents
          <br />
          In Minutes
        </h1>

        <p className="mt-6 text-xl text-gray-500">
          Upload PDFs, add signatures,
          and manage documents securely.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-black text-white px-8 py-4 rounded-xl"
          >
            Start Free
          </Link>

          <Link
            href="/login"
            className="border px-8 py-4 rounded-xl"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}