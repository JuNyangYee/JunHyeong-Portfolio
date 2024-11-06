'use client'
import { useEffect } from "react";
import Image from "next/image";
import styles from "./logo.module.css";
import Link from "next/link";

export default function Logo() {

    useEffect(() => {
            alert("현재 작업 중인 페이지입니다. \n모바일 환경에서는 정확하게 보이지 않을 수 있습니다.");
        }
    )

    return (
        <div className={styles.logo}>
            <Link href="./" scroll={false}>
                <Image src={"/images/Logo.png"} width={200} height={36} alt="JunHyeong"/>
            </Link>
        </div>
    );
}