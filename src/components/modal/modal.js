'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./modal.module.css";
import FAB from "@/components/modalFab/modalFab";

export default function Modal(props) {

    const postInfo = props.info;
    const postContents = props.contents;
    const imgData = props.imgData;

    const router = useRouter();

    function tagSetting(tags) {
        return (
            tags.map((tag, index) => 
                <p key={index} className={styles.workTagButton}>{tag}</p>
            )
        )
    }

    function imgSetting(imgs) {
        return (
            imgs.map((img, index) =>
                <div key={index} className={styles.contentsImage}>
                    <div className={styles.img}>
                        <Image
                            src={img.url}
                            fill
                            alt={img.alt}
                            sizes="width: 100%" 
                            style={{objectFit: "cover"}}
                        />
                    </div>
                    <p>{img.title}</p>
                </div>
            )
        )
    }

    return (
        <section className={styles.modalPage}>
            <div className={styles.outerContainer}>
                <section className={styles.innerContainer}>

                    <div className={styles.thumbnail}>
                        <div className={styles.blur} />
                        <Image 
                            src={postInfo.thumbnail} 
                            fill 
                            alt="thumbnail"
                            sizes="width: 100%"
                            style={{objectFit: "cover"}}
                        />
                    </div>

                    <section className={styles.innerPadding}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>{postInfo.title}</h1>
                            <p className={styles.date}>{postInfo.date}</p>
                            <p className={styles.about}>
                                {postInfo.about}
                            </p>
                            <div className={styles.workTags}>
                                {tagSetting(postInfo.tags)}
                            </div>
                        </div>

                        <div className={styles.contents}>
                            <section className={styles.contentsSection}>
                                {postContents}
                            </section>
                            <section className={styles.contentsSection}>
                                <h1>🖼️ 이미지</h1>
                                <p>이미지 클릭 시 크게 볼 수 있습니다.</p>
                                <section className={styles.imgSection}>

                                    {imgSetting(imgData)}

                                </section>
                            </section>
                            
                        </div>
                    </section>

                </section>

                <FAB 
                    blog={postInfo.fab_blog}
                    video={postInfo.fab_video}
                    link={postInfo.fab_link}
                />
            </div>

            <section className={styles.modalBack} onClick={() => router.back()}>
            </section>

        </section>
    );
}