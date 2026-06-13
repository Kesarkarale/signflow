import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;

    const document = await prisma.document.create({
      data: {
        title,
        fileUrl: "TEMP_URL",
        ownerId: "TEMP_USER_ID",
      },
    });

    return NextResponse.json(document);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
