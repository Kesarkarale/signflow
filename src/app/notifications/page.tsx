import {
  Bell,
  CheckCircle,
  FileText,
  PenTool,
  AlertCircle,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Document Signed",
    description:
      "Employment Agreement was signed successfully.",
    time: "2 min ago",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    id: 2,
    title: "New Document Uploaded",
    description:
      "NDA Contract has been uploaded.",
    time: "1 hour ago",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 3,
    title: "Signature Request",
    description:
      "A new signature request is waiting.",
    time: "3 hours ago",
    icon: PenTool,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "Security Alert",
    description:
      "New login detected on your account.",
    time: "Yesterday",
    icon: AlertCircle,
    color: "text-red-600",
    bg: "bg-red-100",
  },
];

export default function NotificationsPage() {
  return (
    <div className="p-8 space-y-8">

      {/* Hero */}

      <div className="
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-purple-600
        rounded-3xl
        p-8
        text-white
        shadow-xl
      ">

        <div className="flex items-center gap-4">

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-white/20
            flex
            items-center
            justify-center
          ">
            <Bell size={32} />
          </div>

          <div>

            <h1 className="text-4xl font-bold">
              Notifications
            </h1>

            <p className="text-blue-100 mt-2">
              Stay updated with all document
              activities and alerts.
            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="
          bg-white
          dark:bg-slate-900
          border
          rounded-3xl
          p-6
        ">
          <p className="text-slate-500">
            Total Notifications
          </p>

          <h2 className="text-4xl font-bold mt-2">
            24
          </h2>
        </div>

        <div className="
          bg-white
          dark:bg-slate-900
          border
          rounded-3xl
          p-6
        ">
          <p className="text-slate-500">
            Unread
          </p>

          <h2 className="text-4xl font-bold mt-2 text-red-600">
            6
          </h2>
        </div>

        <div className="
          bg-white
          dark:bg-slate-900
          border
          rounded-3xl
          p-6
        ">
          <p className="text-slate-500">
            Today
          </p>

          <h2 className="text-4xl font-bold mt-2 text-blue-600">
            12
          </h2>
        </div>

      </div>

      {/* Notifications List */}

      <div className="
        bg-white
        dark:bg-slate-900
        border
        rounded-3xl
        p-6
      ">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Recent Notifications
          </h2>

          <button
            className="
              bg-blue-600
              text-white
              px-4
              py-2
              rounded-xl
            "
          >
            Mark All Read
          </button>

        </div>

        <div className="space-y-4">

          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  flex
                  items-start
                  gap-4
                  p-5
                  border
                  rounded-2xl
                  hover:shadow-md
                  transition
                "
              >

                <div
                  className={`
                    h-12
                    w-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${item.bg}
                  `}
                >
                  <Icon
                    className={item.color}
                    size={22}
                  />
                </div>

                <div className="flex-1">

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-1">
                    {item.description}
                  </p>

                </div>

                <span className="text-sm text-slate-400">
                  {item.time}
                </span>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}
