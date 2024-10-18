'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../app/layout.module.css";

export default function NavMenu() {
    const pathname = usePathname();
    return (
        <nav className={styles.menu}>
            <ul className={styles.memuList}>
                <li>
                    <Link href="./" className={pathname === "/" ? styles.active : styles.none}>Home</Link>
                </li>
                <li>
                    <Link href="/works" className={pathname === "/works" ? styles.active : styles.none}>Works</Link>
                </li>
                <li>
                    <Link href="/profile" className={pathname === "/profile" ? styles.active : styles.none}>Profile</Link>
                </li>
                <li>
                    <a href="https://junyangyee.github.io/" target="_blank">Blog</a>
                </li>
            </ul>
        </nav>
    );
}