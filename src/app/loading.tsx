import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">

        <div className="animate-pulse">
          <Image
            src="/logo.png"
            alt="SignFlow"
            width={180}
            height={180}
            priority
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce" />
          <div
            className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />
          <div
            className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
        </div>

        <p className="text-slate-400 text-sm">
          Loading Dashboard...
        </p>

      </div>
    </div>
  );
}
