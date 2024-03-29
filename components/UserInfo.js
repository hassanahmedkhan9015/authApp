"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signOut();
  };
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>

          <button
            // onClick={() => signOut() handleSubmit}
            onClick={handleSubmit}
            className="bg-red-500 text-white font-bold px-4 py-2 rounded-md mt-3 hover:scale-95 transition-all"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
