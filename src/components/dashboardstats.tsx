interface Props {
  title: string;
  value: number;
  icon?: string;
}

export default function DashboardStats({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-500 text-sm">
          {title}
        </h3>

        <span className="text-2xl">
          {icon}
        </span>
      </div>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}
