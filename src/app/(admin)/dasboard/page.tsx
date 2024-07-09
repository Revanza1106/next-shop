"use client";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    }, [router,status])
    return (
        <div className="w-full h-96 bg-gray-300 flex justify-center items-center rounded-[12px]">
            <p>dasboard</p>
        </div>
    )
}