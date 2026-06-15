import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const body = await req.json();

  const document =
    await prisma.document.create({
      data: {
        title: body.title,
        fileUrl: body.fileUrl,
        ownerId: body.ownerId,
        
        signToken: randomUUID(),
      },
    });

  return NextResponse.json(document);
}
