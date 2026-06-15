interface Props {
  title: string;
  value: number;
}

export default function DashboardStats({
  title,
  value,
}: Props) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      bg-white
      dark:bg-slate-900
      border
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
    "
    >
      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-1
        bg-gradient-to-r
        from-blue-500
        via-indigo-500
        to-purple-500
      "
      />

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

          <div
            className="
            mt-4
            inline-flex
            items-center
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            bg-green-100
            text-green-700
          "
          >
            +12% Growth
          </div>

        </div>

        <div
          className="
          h-16
          w-16
          rounded-2xl
          bg-gradient-to-r
          from-blue-500
          to-indigo-600
          flex
          items-center
          justify-center
          text-white
          text-2xl
          shadow-lg
        "
        >
          📊
        </div>

      </div>

      <div
        className="
        mt-5
        h-2
        bg-slate-100
        dark:bg-slate-800
        rounded-full
        overflow-hidden
      "
      >
        <div
          className="
          h-full
          w-3/4
          bg-gradient-to-r
          from-blue-500
          to-indigo-600
          rounded-full
        "
        />
      </div>

    </div>
  );
}
}
