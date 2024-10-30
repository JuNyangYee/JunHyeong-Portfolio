import Image from "next/image";
import Link from "next/link";
import styles from "./floating.module.css";

export default function FloatingButton() {
    return (
        <section className={styles.floatingButton}>
            <div className={styles.floatingList}>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>MAIL</span>
                    </div>
                    <Link href="mailto:answnsgud19@gmail.com">
                        <button className={styles.button}>
                            <Image src={"/icons/Mail.svg"} width={26} height={26} alt="Mail" title="Mail"/>
                        </button>
                    </Link>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>INSTAGRAM</span>
                    </div>
                    <Link href="https://www.instagram.com/ju_nyang_yee/" target="_blank">
                        <button className={styles.button}>
                            <Image src={"/icons/Instagram.svg"} width={26} height={26} alt="Instagram" title="Instagram"/>
                        </button>
                    </Link>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>BLOG</span>
                    </div>
                    <Link href="https://junyangyee.github.io/" target="_blank">
                        <button className={styles.button}>
                            <Image src={"/icons/blog.svg"} width={26} height={26} alt="Blog" title="Blog"/>
                        </button>
                    </Link>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>TOP</span>
                    </div>
                    <Link href="#root">
                        <button className={styles.button}>
                            <Image src={"/icons/up.svg"} width={36} height={36} alt="Top" title="Top"/>
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}