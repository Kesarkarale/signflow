export default function BillingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Billing & Subscription</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-white border p-4 rounded-xl">
          <h2 className="font-semibold">Current Plan</h2>
          <p className="text-gray-500">Free Plan</p>
        </div>

        <div className="bg-white border p-4 rounded-xl">
          <h2 className="font-semibold">Upgrade</h2>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
}
