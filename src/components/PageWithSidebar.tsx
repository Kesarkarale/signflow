import Sidebar from "@/components/sidebar";

export default function PageWithSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-slate-50 dark:bg-slate-950">
        {children}
      </main>
    </div>
  );
}
