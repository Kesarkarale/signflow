import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, fileUrl, ownerId } = body;

    if (!title || !fileUrl || !ownerId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const document =
      await prisma.document.create({
        data: {
          title,
          fileUrl,
          ownerId,
          signToken: randomUUID(),
          status: "PENDING",
        },
      });

    await prisma.auditLog.create({
      data: {
        documentId: document.id,
        action: "DOCUMENT_CREATED",
      },
    });

    return NextResponse.json(document);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create document" },
      { status: 500 }
    );
  }
}
