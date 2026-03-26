'use client'
import { useRouter } from "next/navigation";

export default function Default() {
    const router = useRouter();
    return (
        router.push("../")
    )
}
