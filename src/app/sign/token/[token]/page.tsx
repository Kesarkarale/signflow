import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function PublicSignPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const document =
    await prisma.document.findUnique({
      where: {
        signToken: token,
      },
    });

  if (!document) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-4">
        {document.title}
      </h1>

      <p className="text-slate-500">
        Sign this document
      </p>

    </div>
  );
}
