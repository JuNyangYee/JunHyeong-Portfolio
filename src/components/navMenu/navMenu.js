'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav.module.css";

export default function NavMenu() {
    const pathname = usePathname();
    return (
        <nav className={styles.menu}>
            <ul className={styles.memuList}>
                <li>
                    <Link href="./">PROFILE</Link>
                </li>
                <li>
                    <Link href="./">WORKS</Link>
                </li>
                <li>
                    <Link href="./">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}