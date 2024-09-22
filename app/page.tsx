import { Appbar } from "@/components/Appbar";
import prisma from "@/db";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/auth";

const client: PrismaClient = prisma;

export default async function Home() {
  // const userData = await client.user.findFirst({
  //   where: { email: "000amitkumar@gmail.com" },
  // });
  const userData = await client.user.findFirst({});
  const server_session = await getServerSession(NEXT_AUTH);
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>{userData?.email}</div>
          <Appbar />
          <br />
          <br />
          <div>Server Session : {JSON.stringify(server_session)}</div>
        </div>
      </div>
    </div>
  );
}
