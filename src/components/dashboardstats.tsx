interface Props {
  totalDocs: number;
  pendingDocs: number;
  signedDocs: number;
}

export default function DashboardStats({
  totalDocs,
  pendingDocs,
  signedDocs,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl p-6 border">
        <h3>Total Documents</h3>
        <p className="text-4xl font-bold mt-3">
          {totalDocs}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border">
        <h3>Pending</h3>
        <p className="text-4xl font-bold mt-3 text-yellow-500">
          {pendingDocs}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border">
        <h3>Signed</h3>
        <p className="text-4xl font-bold mt-3 text-green-600">
          {signedDocs}
        </p>
      </div>
    </div>
  );
}
