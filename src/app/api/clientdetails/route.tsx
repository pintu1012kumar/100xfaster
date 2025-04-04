import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { corsHeaders } from "@/app/lib/cors";

// Preflight handler (important for POST from forms or JS fetch)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 204, headers: corsHeaders() });
}

export async function POST(req: Request) {
  try {
    const { name, age, gender, bodyPart, description } = await req.json();

    if (!name || !age || !bodyPart) {
      return NextResponse.json(
        { error: "Name, age, and bodyPart are required!" },
        { status: 400, headers: corsHeaders() }
      );
    }

    const newClient = await prisma.clientdetails.create({
      data: { name, age, gender, bodyPart, description },
    });

    return NextResponse.json(
      { message: "Client details stored successfully!", data: newClient },
      { status: 201, headers: corsHeaders() }
    );
  } catch (error) {
    console.error("Error storing client details:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500, headers: corsHeaders() }
    );
  }
}
