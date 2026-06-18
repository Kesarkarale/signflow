 import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session =
    await getServerSession(authConfig);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Welcome {session.user.name}
      </p>
    </div>
  );
}
