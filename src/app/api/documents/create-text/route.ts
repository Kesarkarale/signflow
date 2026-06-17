import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const document =
      await prisma.document.create({
        data: {
          title: body.title,
          fileUrl: "",
          ownerId:
            "TEMP_USER_ID",
          status: "PENDING",
        },
      });

    return NextResponse.json(
      document
    );
  } catch {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
