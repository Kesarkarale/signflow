import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      documentId,
      signerId,
      imageUrl,
      x,
      y,
      page,
    } = body;

    const signature =
      await prisma.signature.create({
        data: {
          documentId,
          signerId,
          imageUrl,
          x,
          y,
          page,
          status: "SIGNED",
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
        documentId,
        action: "DOCUMENT_SIGNED",
      },
    });

    return NextResponse.json({
      success: true,
      signature,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to save signature",
      },
      {
        status: 500,
      }
    );
  }
}
