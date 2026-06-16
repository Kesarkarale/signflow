import Link from "next/link";
import {
  FileSignature,
  ShieldCheck,
  Clock3,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Navbar */}

      <nav className="border-b border-slate-200 dark:border-slate-800 backdrop-blur sticky top-0 z-50 bg-background/80">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              S
            </div>

            <div>
              <h1 className="font-bold text-2xl">
                SignFlow
              </h1>

              <p className="text-xs text-slate-500">
                E-Sign Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">

            <Link
              href="/login"
              className="font-medium hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium"
            >
              Get Started
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 text-sm font-medium">
              🚀 Secure Digital Signatures
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight">
              Sign Documents
              <span className="text-blue-600">
                {" "}Faster
              </span>
              <br />
              Than Ever
            </h1>

            <p className="text-xl text-slate-500 mt-6 max-w-xl">
              Upload PDFs, collect digital signatures,
              manage documents and track audit logs
              from one professional platform.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold flex items-center gap-2"
              >
                Start Free
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/login"
                className="border px-6 py-4 rounded-2xl font-semibold"
              >
                Login
              </Link>

            </div>

          </div>

          <div>

            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">

              <h3 className="text-2xl font-bold">
                Workspace Overview
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-white/10 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold">
                    150+
                  </h4>
                  <p>Documents</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold">
                    98%
                  </h4>
                  <p>Signed</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold">
                    24/7
                  </h4>
                  <p>Secure</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold">
                    100%
                  </h4>
                  <p>Audit Logs</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-3xl p-8 hover:shadow-xl transition">
            <FileText
              size={40}
              className="text-blue-600 mb-4"
            />
            <h3 className="text-xl font-bold">
              PDF Management
            </h3>
            <p className="text-slate-500 mt-3">
              Upload and organize all documents.
            </p>
          </div>

          <div className="border rounded-3xl p-8 hover:shadow-xl transition">
            <FileSignature
              size={40}
              className="text-blue-600 mb-4"
            />
            <h3 className="text-xl font-bold">
              Digital Signatures
            </h3>
            <p className="text-slate-500 mt-3">
              Sign documents securely online.
            </p>
          </div>

          <div className="border rounded-3xl p-8 hover:shadow-xl transition">
            <ShieldCheck
              size={40}
              className="text-blue-600 mb-4"
            />
            <h3 className="text-xl font-bold">
              Audit Logs
            </h3>
            <p className="text-slate-500 mt-3">
              Complete document history tracking.
            </p>
          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="py-20 bg-slate-100 dark:bg-slate-900">

        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              50K+
            </h3>
            <p className="mt-2 text-slate-500">
              Documents
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              10K+
            </h3>
            <p className="mt-2 text-slate-500">
              Signatures
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              99.9%
            </h3>
            <p className="mt-2 text-slate-500">
              Uptime
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">
              24/7
            </h3>
            <p className="mt-2 text-slate-500">
              Support
            </p>
          </div>

        </div>

      </section>

      {/* How It Works */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">
            <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mt-4">
              Upload PDF
            </h3>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mt-4">
              Add Signers
            </h3>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mt-4">
              Get Signed
            </h3>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-6xl mx-auto px-8 pb-20">

        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">

          <Clock3
            size={48}
            className="mx-auto mb-6"
          />

          <h2 className="text-4xl font-bold">
            Ready To Start?
          </h2>

          <p className="mt-4 text-blue-100">
            Create your SignFlow account today.
          </p>

          <Link
            href="/register"
            className="inline-block mt-8 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold"
          >
            Create Account
          </Link>

        </div>

      </section>

    </div>
  );
}
