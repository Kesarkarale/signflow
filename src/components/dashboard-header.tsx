export default function DashboardHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Manage documents and signatures from one place.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="/upload"
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Upload Document
        </a>
      </div>
    </div>
  );
}
