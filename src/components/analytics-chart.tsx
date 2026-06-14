"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", docs: 12 },
  { month: "Feb", docs: 19 },
  { month: "Mar", docs: 30 },
  { month: "Apr", docs: 42 },
  { month: "May", docs: 56 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white border rounded-3xl p-6">

      <h2 className="font-bold text-xl mb-5">
        Documents Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="docs"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}
