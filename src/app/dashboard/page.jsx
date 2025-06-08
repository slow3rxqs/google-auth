"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [status]);

  if (status === "loading") return <p>Yükleniyor...</p>;

  return <div>Hoş geldin {session.user.name}, burası sadece üyeler için.</div>;
}
