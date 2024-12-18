'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./floating.module.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function FloatingButton() {

    const ScrollToID = function (id) {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    };

    const warning = function () {
        alert("아직 준비 중입니다. \n곧 완성되니 조금만 더 기다려주세요 :)");
    }

    return (
        <section className={styles.floatingButton}>
            <div className={styles.floatingList}>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>PDF PORTFOLIO</span>
                    </div>
                    <button className={styles.button} onClick={() => warning()}>
                        <PictureAsPdfIcon className={styles.icon} label="PDF" fontSize="medium"/>
                    </button>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>MAIL</span>
                    </div>
                    <Link href="mailto:answnsgud19@gmail.com">
                        <button className={styles.button}>
                            {/* <Image src={"/icons/Mail.svg"} width={26} height={26} alt="Mail" title="Mail"/> */}
                            <EmailIcon className={styles.icon} label="Mail"/>
                        </button>
                    </Link>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>GITHUB</span>
                    </div>
                    <Link href="https://github.com/JuNyangYee" target="_blank">
                        <button className={styles.button}>
                            {/* <Image src={"/icons/github.svg"} width={28} height={28} alt="Github" title="Github"/> */}
                            <GitHubIcon className={styles.icon} label="Github" fontSize="medium"/>
                        </button>
                    </Link>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>BLOG</span>
                    </div>
                    <Link href="https://junyangyee.github.io/" target="_blank">
                        <button className={styles.button}>
                            {/* <Image src={"/icons/blog.svg"} width={26} height={26} alt="Blog" title="Blog"/> */}
                            <PersonIcon className={styles.icon} label="Blog" fontSize="medium"/>
                        </button>
                    </Link>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>INSTAGRAM</span>
                    </div>
                    <Link href="https://www.instagram.com/ju_nyang_yee/" target="_blank">
                        <button className={styles.button}>
                            {/* <Image src={"/icons/Instagram.svg"} width={26} height={26} alt="Instagram" title="Instagram"/> */}
                            <InstagramIcon className={styles.icon} label="Instagram" fontSize="medium"/>
                        </button>
                    </Link>
                </div>

                <div className={styles.floatingItem}>
                    <div className={styles.tooltip}>
                        <span>TOP</span>
                    </div>
                    <div>
                        <button className={styles.button} onClick={() => ScrollToID("root")}>
                            {/* <Image src={"/icons/up.svg"} width={36} height={36} alt="Top" title="Top"/> */}
                            <KeyboardArrowUpIcon className={styles.icon} label="Top" fontSize="large"/>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}