"use client";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid,
} from "recharts";

const data = [
{ month: "Jan", docs: 12 },
{ month: "Feb", docs: 19 },
{ month: "Mar", docs: 30 },
{ month: "Apr", docs: 42 },
{ month: "May", docs: 56 },
{ month: "Jun", docs: 72 },
];

export default function AnalyticsChart() {
return ( <div
   className="
   bg-white
   dark:bg-slate-900
   border
   dark:border-slate-800
   rounded-3xl
   p-6
   shadow-sm
   h-full
 "
 > <div className="flex items-center justify-between mb-8">

    <div>
      <h2 className="text-2xl font-bold">
        Documents Analytics
      </h2>

      <p className="text-slate-500 mt-1">
        Monthly document growth overview
      </p>
    </div>

    <div
      className="
      bg-green-100
      text-green-700
      px-4
      py-2
      rounded-full
      text-sm
      font-semibold
    "
    >
      +24% Growth
    </div>

  </div>

  <div className="grid grid-cols-3 gap-4 mb-8">

    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
      <h4 className="text-sm text-slate-500">
        Total Docs
      </h4>

      <p className="text-2xl font-bold mt-2">
        231
      </p>
    </div>

    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
      <h4 className="text-sm text-slate-500">
        Signed
      </h4>

      <p className="text-2xl font-bold mt-2 text-green-600">
        178
      </p>
    </div>

    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
      <h4 className="text-sm text-slate-500">
        Pending
      </h4>

      <p className="text-2xl font-bold mt-2 text-yellow-600">
        53
      </p>
    </div>

  </div>

  <ResponsiveContainer
    width="100%"
    height={320}
  >
    <LineChart data={data}>
      <CartesianGrid
        strokeDasharray="3 3"
      />

      <XAxis dataKey="month" />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="docs"
        stroke="#2563eb"
        strokeWidth={4}
        dot={{
          r: 5,
        }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

);
}
