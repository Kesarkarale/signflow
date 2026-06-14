import NotificationBell from "./notification-bell";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500">
          Manage your documents securely.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <NotificationBell />

        <a
          href="/upload"
          className="
          bg-blue-600
          text-white
          px-5
          py-3
          rounded-xl
          "
        >
          Upload Document
        </a>
      </div>

    </div>
  );
}
