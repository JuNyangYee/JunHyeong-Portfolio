'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./modal.module.css";
import mdStyles from "./modalMarkdown.module.css";
import FAB from "@/components/modalFab/modalFab";
import ImgModal from "@/components/imgModal/imgModal";
import { useState } from "react";

export default function Modal(props) {

    const postInfo = props.info;
    const postContents = props.contents;
    const imgData = props.imgData;
    let showimgData;

    const router = useRouter();

    function tagSetting(tags) {
        return (
            tags.map((tag, index) => 
                <p key={index} className={styles.workTagButton}>{tag}</p>
            )
        )
    }
    
    const [showModal, setShowModal] = useState(false);
    const [nowImg, setImg] = useState();

    function modalChange() {
        setShowModal(!showModal);
    }

    function clickImg(img) {
        setShowModal(!showModal);
        setImg(img);
    }
   

    function imgSetting(imgs) {
        return (
            imgs.map((img, index) => 
                <div key={index} className={styles.contentsImage} onClick={() => clickImg(img)}>
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

                        <div className={mdStyles.markdownSection}>
                            <section className={mdStyles.markdown}>
                                {postContents}
                            </section>
                            <section className={mdStyles.markdown}>
                                <div>
                                    <h3 style={{marginBottom: 0.35 + 'rem'}}>이미지</h3>
                                    <p style={{fontSize: 0.825 + 'rem', marginBottom: 0.5 + 'rem', color: '#787878', lineHeight: 140 + '%'}}>
                                        ※ 이미지 클릭 시 크게 볼 수 있습니다.<br />
                                        ※ 현재 상태와 다를 수 있습니다.
                                    </p>
                                </div>
                                <section className={styles.imgSection}>

                                    {imgSetting(imgData)}

                                </section>
                            </section>
                            
                        </div>
                    </section>

                </section>

                <FAB 
                    github={postInfo.fab_github}
                    github_url={postInfo.fab_github_url}
                    blog={postInfo.fab_blog}
                    blog_url={postInfo.fab_blog_url}
                    video={postInfo.fab_video}
                    video_url={postInfo.fab_video_url}
                    link={postInfo.fab_link}
                    link_url={postInfo.fab_link_url}
                />
            </div>

            {showModal && <ImgModal img={nowImg} clickImg={modalChange} />}

            <section className={styles.modalBack} onClick={() => router.back()}>
            </section>

        </section>
    );
}