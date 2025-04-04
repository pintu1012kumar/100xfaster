import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { corsHeaders } from "@/app/lib/cors";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    if (!name) {
      return NextResponse.json({ error: "User name is required!" }, { status: 400 });
    }

    const user = await prisma.clientdetails.findUnique({
      where: { name },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    const { age, bodyPart } = user;
    return NextResponse.json({ name, age, bodyPart }, { status: 200 });

  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500, headers: corsHeaders() });
  }
}
