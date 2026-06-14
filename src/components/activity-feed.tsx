export default function ActivityFeed() {
  const activities = [
    "Document uploaded",
    "Document signed",
    "New account created",
    "Audit log generated",
  ];

  return (
    <div className="bg-white border rounded-3xl p-6">

      <h2 className="font-bold text-xl mb-5">
        Activity Feed
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-600 pl-4"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}
