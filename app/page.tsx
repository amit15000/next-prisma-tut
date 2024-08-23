import prisma from "@/db";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { setTimeout } from "timers/promises";

const client: PrismaClient = prisma;

export default async function Home() {
  // const userData = await client.user.findFirst({
  //   where: { email: "000amitkumar@gmail.com" },
  // });
  const userData = await client.user.findFirst({});
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>{userData?.email}</div>
        </div>
      </div>
    </div>
  );
}
