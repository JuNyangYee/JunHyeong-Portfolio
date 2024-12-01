'useClient'
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./modalFab.module.css";
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotesIcon from '@mui/icons-material/Notes';
import LinkIcon from '@mui/icons-material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function WorkFAB(props) {
    const router = useRouter();

    return (
        <section className={styles.fab}>
            <div className={styles.fabArea}>
                <div className={styles.fabItem}>
                    <button id={styles.close} className={styles.fabButton} onClick={() => router.back()}>
                        {/* <Image 
                            src={"/icons/close.svg"} 
                            width={24} height={24} 
                            alt="Close" 
                            title="Close"
                        /> */}
                        <CloseIcon className={styles.icon} label="Close" fontSize="medium"/>
                    </button>
                    <p className={styles.fabText}>닫기</p>
                </div>

                <div className={props.github ? styles.fabItem : styles.hide}>
                    <Link href={props.github_url} className={styles.fabButton} target="_blank">
                        <GitHubIcon className={styles.icon} label="Github" fontSize="medium"/>
                    </Link>
                    <p className={styles.fabText}>Github</p>
                </div>

                <div className={props.blog ? styles.fabItem : styles.hide}>
                    <Link href={props.blog_url} className={styles.fabButton} target="_blank">
                        {/* <Image 
                            src={"/icons/page.svg"} 
                            width={24} height={24} 
                            alt="Blog" 
                            title="Blog"
                        /> */}
                        <NotesIcon className={styles.icon} label="Blog" fontSize="medium"/>
                    </Link>
                    <p className={styles.fabText}>블로그</p>
                </div>

                <div className={props.video ? styles.fabItem : styles.hide}>
                    <Link href={props.video_url} className={styles.fabButton} target="_blank">
                        {/* <Image 
                            src={"/icons/video.svg"} 
                            width={28} height={32} 
                            alt="Video" 
                            title="Video"
                        /> */}
                        <YouTubeIcon className={styles.icon} label="Video" fontSize="medium"/>
                    </Link>
                    <p className={styles.fabText}>영상</p>
                </div>
                
                <div className={props.link ? styles.fabItem : styles.hide}>
                    <Link href={props.link_url} className={styles.fabButton} target="_blank">
                        {/* <Image 
                            src={"/icons/link.svg"} 
                            width={24} height={24} 
                            alt="Link" 
                            title="Link"
                        /> */}
                        <LinkIcon className={styles.icon} label="Link" fontSize="medium"/>
                    </Link>
                    <p className={styles.fabText}>링크</p>
                </div>
            </div>
        </section>
    )
}