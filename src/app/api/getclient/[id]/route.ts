import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Validate ID
    if (!id) {
      return NextResponse.json({ error: "User ID is required!" }, { status: 400 });
    }

    // Fetch full user data
    const user = await prisma.clientdetails.findUnique({
      where: { id },
    });

    // If user not found
    if (!user) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    // Return only required fields
    const { name, bodyPart } = user;

    return NextResponse.json({ name, bodyPart }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
