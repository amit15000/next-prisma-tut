"use client";

import { signIn, signOut } from "next-auth/react";

// import { useRouter } from "next/navigation";

// export function Appbar() {
//   const router = useRouter();
//   return (
//     <button onClick={() => router.push("/api/auth/signin")}>SignIn</button>
//   );
// }

export function Appbar() {
  return (
    <>
      <button onClick={() => signIn()}>SignIn</button>
      <br></br>
      <button onClick={() => signOut()}>SignOut</button>
    </>
  );
}
