'use client'
import { useEffect } from "react";
import Image from "next/image";
import styles from "./logo.module.css";
import Link from "next/link";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="https://junyangyee.vercel.app/" scroll={false}>
                <Image 
                    src={"/images/Logo.png"} 
                    fill
                    alt="JunHyeong_Logo"
                />
            </Link>
        </div>
    );
}