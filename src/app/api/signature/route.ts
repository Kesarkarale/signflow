import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      documentId,
      signerId,
      signatureImage,
    } = body;

    if (
      !documentId ||
      !signerId ||
      !signatureImage
    ) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const signature =
      await prisma.signature.create({
        data: {
          documentId,
          signerId,
          signatureImage,
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

    return NextResponse.json(
      signature
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
