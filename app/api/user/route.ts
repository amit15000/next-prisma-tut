import { NEXT_AUTH } from "@/app/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
  const session = await getServerSession(NEXT_AUTH);
  const user = await client.user.findFirst({});
  return NextResponse.json({ session, user });
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
