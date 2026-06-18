export default function ActivityPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Activity Log</h1>

      <div className="mt-6 bg-white border rounded-xl p-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>✔ Created signature</li>
          <li>✔ Updated profile</li>
          <li>✔ Upgraded plan</li>
        </ul>
      </div>
    </div>
  );
}
