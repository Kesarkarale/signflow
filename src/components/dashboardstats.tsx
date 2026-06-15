interface Props {
title: string;
value: number;
}

export default function DashboardStats({
title,
value,
}: Props) {
return ( <div
   className="
   bg-white
   dark:bg-slate-900
   border
   dark:border-slate-800
   rounded-3xl
   p-6
   shadow-sm
   hover:shadow-xl
   hover:-translate-y-1
   transition-all
   "
 > <p className="text-slate-500 text-sm">
{title} </p>

  <h2 className="text-4xl font-bold mt-3">
    {value}
  </h2>

  <p className="text-green-500 text-sm mt-4">
    ↑ Active
  </p>
</div>
);
}
