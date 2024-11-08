'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function WorkTest() {
    const router = useRouter();

    return (
        <section className={styles.modalPage}>
            <div className={styles.innerContainer}>
                <div className={styles.thumbnail}>
                    
                </div>
            </div>

            <section className={styles.modalBack} onClick={() => router.back()}>
            </section>

        </section>


    );
}