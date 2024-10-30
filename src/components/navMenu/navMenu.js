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
                    <Link href="#profile" className={styles.menuButton}>PROFILE</Link>
                </li>
                <li>
                    <Link href="./" className={styles.menuButton}>WORKS</Link>
                </li>
                <li>
                    <Link href="./" className={styles.menuButton}>CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}