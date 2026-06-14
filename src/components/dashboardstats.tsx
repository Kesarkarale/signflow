interface Props {
  title: string;
  value: number;
}

export default function DashboardStats({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border">
      <h3 className="text-slate-500">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}
