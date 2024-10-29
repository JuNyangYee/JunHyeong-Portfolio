import Image from "next/image";
import styles from "./logo.module.css";
import Link from "next/link";

export default function FloatingMenu() {
    return (
        <div className={styles.logo}>
            <Link href="./" scroll={false}>
                <Image src={"/images/Logo.png"} width={200} height={36} alt="JunHyeong"/>
            </Link>
        </div>
    );
}