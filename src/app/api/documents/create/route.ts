 import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authConfig);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const { title, fileUrl } = body;

    if (!title || !fileUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const document = await prisma.document.create({
      data: {
        title,
        fileUrl,
        ownerId: session.user.id,
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

    return NextResponse.json({
      success: true,
      document,
    });

  } catch (error) {
    console.error("CREATE DOCUMENT ERROR:", error);

    return NextResponse.json(
      { error: "Failed to create document" },
      { status: 500 }
    );
  }
}
