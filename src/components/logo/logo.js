'use client'
import { useEffect } from "react";
import Image from "next/image";
import styles from "./logo.module.css";
import Link from "next/link";

export default function Logo() {

    var today = new Date();

    useEffect(() => {
            alert("찾아주셔서 감사합니다.\n아직 개발 중인 페이지입니다.\n곧 완성되니 조금만 더 기다려주세요 :)");
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