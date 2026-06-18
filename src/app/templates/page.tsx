export default function TemplatesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Email Templates</h1>
      <p className="text-gray-500 mt-1">
        Choose or create reusable templates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Template Cards */}
        <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md">
          <h2 className="font-semibold">Modern Signature</h2>
        </div>
      </div>
    </div>
  );
}
