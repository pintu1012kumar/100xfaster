import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name"); // Extract name from URL query params

    // Validate Name
    if (!name) {
      return NextResponse.json({ error: "User name is required!" }, { status: 400 });
    }

    // Fetch user by name
    const user = await prisma.clientdetails.findUnique({
      where: { name },
    });

    // If user not found
    if (!user) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    // Return only required fields
    const { age,bodyPart } = user;

    return NextResponse.json({ name, age,bodyPart }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
