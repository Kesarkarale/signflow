import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping"></div>

        <Image
          src="/logo.png"
          alt="SignFlow"
          width={90}
          height={90}
          className="animate-pulse"
        />
      </div>
    </div>
  );
}
