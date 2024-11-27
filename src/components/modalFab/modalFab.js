'useClient'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./modalFab.module.css";

export default function WorkFAB(props) {
    const router = useRouter();

    return (
        <section className={styles.fab}>
            <div className={styles.fabArea}>
                <div className={styles.fabItem}>
                    <button id={styles.close} className={styles.fabButton} onClick={() => router.back()}>
                        <Image 
                            src={"/icons/close.svg"} 
                            width={24} height={24} 
                            alt="Close" 
                            title="Close"
                        />
                    </button>
                    <p className={styles.fabText}>닫기</p>
                </div>
                <div className={props.blog ? styles.fabItem : styles.hide}>
                    <Link href={props.blog_url} className={styles.fabButton} target="_blank">
                        <Image 
                            src={"/icons/page.svg"} 
                            width={24} height={24} 
                            alt="Blog" 
                            title="Blog"
                        />
                    </Link>
                    <p className={styles.fabText}>블로그</p>
                </div>
                <div className={props.video ? styles.fabItem : styles.hide}>
                    <Link href={props.video_url} className={styles.fabButton} target="_blank">
                        <Image 
                            src={"/icons/video.svg"} 
                            width={28} height={32} 
                            alt="Video" 
                            title="Video"
                        />
                    </Link>
                    <p className={styles.fabText}>영상</p>
                </div>
                <div className={props.link ? styles.fabItem : styles.hide}>
                    <Link href={props.link_url} className={styles.fabButton} target="_blank">
                        <Image 
                            src={"/icons/link.svg"} 
                            width={24} height={24} 
                            alt="Link" 
                            title="Link"
                        />
                    </Link>
                    <p className={styles.fabText}>링크</p>
                </div>
            </div>
        </section>
    )
}