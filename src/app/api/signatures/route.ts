import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      documentId,
      signerId,
      x,
      y,
      page,
    } = body;

    const signature =
      await prisma.signature.create({
        data: {
          documentId,
          signerId,
          x,
          y,
          page,
        },
      });

    await prisma.document.update({
      where: {
        id: documentId,
      },
      data: {
        status: "SIGNED",
      },
    });

    await prisma.auditLog.create({
      data: {
        action: "DOCUMENT_SIGNED",
        documentId,
      },
    });

    return NextResponse.json(signature);

  } catch {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
