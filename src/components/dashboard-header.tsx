export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back to SignFlow
        </p>
      </div>

      <div className="flex gap-3">
        <button className="border px-4 py-2 rounded-xl">
          Notifications
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Upload PDF
        </button>
      </div>
    </div>
  );
}
