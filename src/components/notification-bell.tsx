import { Bell } from "lucide-react";

export default function NotificationBell() {
  return (
    <button className="relative p-3 rounded-xl border bg-white">

      <Bell size={20} />

      <span
        className="
        absolute
        top-1
        right-1
        w-2
        h-2
        rounded-full
        bg-red-500
        "
      />

    </button>
  );
}
