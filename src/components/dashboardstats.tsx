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
    <div className="bg-white rounded-3xl p-6 shadow-sm border">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-500">
          {title}
        </h3>

        {icon && (
          <span className="text-2xl">
            {icon}
          </span>
        )}
      </div>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}
