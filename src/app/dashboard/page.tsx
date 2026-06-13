 import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const totalDocs = await prisma.document.count();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Total Documents</h2>
        <h1>{totalDocs}</h1>
      </div>
    </div>
  );
}
