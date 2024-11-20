'use client'
import { useEffect } from "react";
import Image from "next/image";
import styles from "./logo.module.css";
import Link from "next/link";

export default function Logo() {

    useEffect(() => {
            alert("현재 작업 중인 페이지입니다. \n 포트폴리오 내용은 추후 업데이트됩니다.");
        }
    )

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