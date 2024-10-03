"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Signup() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <h1>Signup</h1>
    </div>
  );
}
