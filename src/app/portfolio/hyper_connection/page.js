'use client'
import { useRouter } from "next/navigation";

export default function HyperConnection() {
    const router = useRouter();
    return (
        router.push("../")
    )
}
