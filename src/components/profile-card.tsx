export default function ProfileCard() {
  return (
    <div className="bg-white border rounded-3xl p-6">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          K
        </div>

        <div>
          <h3 className="font-bold">
            Kesar Karale
          </h3>

          <p className="text-slate-500">
            Premium User
          </p>
        </div>

      </div>

    </div>
  );
}
