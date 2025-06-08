"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
 //slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
 //slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
 //slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
 //slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
 //slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
  return (
    <div className="flex items-center justify-center min-h-screen bg-white/10">
      <div className="p-8 bg-white/10  rounded-2xl shadow-xl text-center">
        {session ? (
          <>
            <img src={session.user.image} alt="User" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-blue-800">{session.user.name}</h2>
            <p className="text-white">{session.user.email}</p>
            <button
              onClick={() => signOut()}
              className="mt-6 bg-red-500 hover:bg-red-900 transition-all duration-200 text-white py-2 px-4 rounded-xl"
            >
              Çıkış Yap
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="mt-6 bg-blue-500 hover:bg-blue-900 transition-all duration-200 text-white py-2 px-4 rounded-xl"
            >
              DashBoard
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Google ile Giriş Yap</h1>
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl"
            >
              Google ile Giriş Yap
            </button>
          </>
        )}
      </div>
    </div>
  );
}
