import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="mt-4 text-slate-500">
        Page not found
      </p>

      <Link
        href="/dashboard"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Go Dashboard
      </Link>

    </div>
  );
}
