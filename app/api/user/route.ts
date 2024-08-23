import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
  const user = await client.user.findFirst({});
  return Response.json({ email: user?.email });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const user = await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    console.log(user.id);
    return NextResponse.json({ message: "Signed up" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Sign-up Failed" });
  }
}
