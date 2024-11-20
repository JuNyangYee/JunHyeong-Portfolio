import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import styles from "./workItem.module.css";

export default function WorkItem(props) {

    const now = props.now;
    const info = props.info;

    const scrollCont = useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = "";
          window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
    }, []);

    function tagSetting(tags) {
        return (
            tags.map((tag, index) => 
                <p key={index} className={styles.workTagButton}>{tag}</p>
            )
        )
    }

    function tagCheck(now, mainTag) {
        let result = false;
        mainTag.map((tag) => {
                if (now == "all") {
                    result = true;
                }
                if (now == tag) {
                    result = true;
                }
            }
        )

        return result;
    }

    return (
        <div id={tagCheck(now, info.mainTag) ? styles.tagEnable : styles.tagDisable} className={styles.workItem}>
            <div className={styles.workThumbnail}>
                <div className={styles.workHover}>
                    <Link href={`/portfolio/${info.url}`} className={styles.workMore} scroll={false} onClick={scrollCont}>자세히보기</Link>
                </div>
                <Image 
                    src={info.thumbnail} 
                    fill
                    alt={info.alt}
                    sizes='width: 100%'
                    style={{objectFit: "cover"}} />
            </div>
            <div className={styles.workText}>
                <h3 className={styles.workTitle}>{info.title}</h3>
                <p className={styles.workSub}>{info.sub}</p>
            </div>
            <div className={styles.workTags}>
                {tagSetting(info.tags)}
            </div>
        </div>
    );
}