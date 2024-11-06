'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./floating.module.css";

export default function FloatingButton() {

    const ScrollToTop = function() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };

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
                        <span>GITHUB</span>
                    </div>
                    <Link href="https://github.com/JuNyangYee" target="_blank">
                        <button className={styles.button}>
                            <Image src={"/icons/github.svg"} width={28} height={28} alt="Github" title="Github"/>
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
                        <span>TOP</span>
                    </div>
                    <div>
                        <button className={styles.button} onClick={() => ScrollToTop()}>
                            <Image src={"/icons/up.svg"} width={36} height={36} alt="Top" title="Top"/>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}