import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <main
        className="
          flex-1
          min-h-screen
          bg-slate-100
          dark:bg-slate-950
          text-slate-900
          dark:text-white
        "
      >
        {children}
      </main>
    </div>
  );
}
