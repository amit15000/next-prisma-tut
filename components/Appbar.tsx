"use client";

import { signIn, signOut, useSession } from "next-auth/react";

// import { useRouter } from "next/navigation";

// export function Appbar() {
//   const router = useRouter();
//   return (
//     <button onClick={() => router.push("/api/auth/signin")}>SignIn</button>
//   );
// }

export async function Appbar() {
  const session = useSession();

  return (
    <>
      <br></br>
      <button onClick={() => signIn()}>SignIn</button>
      <br></br>
      <button onClick={() => signOut()}>SignOut</button>
      <br></br>
      <br></br>
      Client Compoent Session: {JSON.stringify(session)}
    </>
  );
}
