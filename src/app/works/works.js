'use client'
import { useState } from 'react';
import Image from "next/image";
import styles from "./works.module.css";

export default function Works() {
    const [now, ChangeTag] = useState(0);

    return (
        <section id="works" className={styles.works}>
            <div className={styles.innerPadding}>

                <h1 className={styles.title}>WORKS</h1>

                <div className={styles.tagSelect}>
                    <div onClick={() => ChangeTag(0)}
                    className={`${styles.button} ${now === 0 ? styles.active : styles.none}`} 
                    name="all">All
                    </div>
                    <div onClick={() => ChangeTag(1)} 
                    className={`${styles.button} ${now === 1 ? styles.active : styles.none}`} 
                    name="tech">Tech</div>
                    <div onClick={() => ChangeTag(2)} 
                    className={`${styles.button} ${now === 2 ? styles.active : styles.none}`} 
                    name="art">Art</div>
                    <div onClick={() => ChangeTag(3)} 
                    className={`${styles.button} ${now === 3 ? styles.active : styles.none}`} 
                    name="doc">Document</div>
                </div>

                <section className={styles.workList}>

                    <div className={styles.workItem}>
                        <div className={styles.workThumbnail}>
                            <div className={styles.workHover}>
                                <p className={styles.workMore}>자세히보기</p>
                            </div>
                            <Image 
                                src={"/images/works/test/TestThumbnail.jpg"} 
                                fill
                                alt='test-thumbnail'
                                sizes='width: 100%'
                                style={{objectFit: "cover"}} />
                        </div>
                        <div className={styles.workText}>
                            <h3 className={styles.workTitle}>작업 제목 01</h3>
                            <p className={styles.workSub}>작업 내용을 한 줄 정도로 간단하게 적습니다.</p>
                        </div>
                        <div className={styles.workTags}>
                            <p className={styles.workTagButton}>Tech</p>
                            <p className={styles.workTagButton}>Unreal Engine</p>
                        </div>
                    </div>

                    <div className={styles.workItem}>
                        <div className={styles.workThumbnail}>
                            <div className={styles.workHover}>
                                <p className={styles.workMore}>자세히보기</p>
                            </div>
                            <Image 
                                src={"/images/works/test/TestThumbnail.jpg"} 
                                fill
                                alt='test-thumbnail'
                                sizes='width: 100%'
                                style={{objectFit: "cover"}} />
                        </div>
                        <div className={styles.workText}>
                            <h3 className={styles.workTitle}>작업 제목 02</h3>
                            <p className={styles.workSub}>작업 내용을 한 줄 정도로 간단하게 적습니다.</p>
                        </div>
                        <div className={styles.workTags}>
                            <p className={styles.workTagButton}>Art</p>
                            <p className={styles.workTagButton}>Photoshop</p>
                        </div>
                    </div>

                    <div className={styles.workItem}>
                        <div className={styles.workThumbnail}>
                            <div className={styles.workHover}>
                                <p className={styles.workMore}>자세히보기</p>
                            </div>
                            <Image 
                                src={"/images/works/test/TestThumbnail.jpg"} 
                                fill
                                alt='test-thumbnail'
                                sizes='width: 100%'
                                style={{objectFit: "cover"}} />
                        </div>
                        <div className={styles.workText}>
                            <h3 className={styles.workTitle}>작업 제목 03</h3>
                            <p className={styles.workSub}>작업 내용을 한 줄 정도로 간단하게 적습니다.</p>
                        </div>
                        <div className={styles.workTags}>
                            <p className={styles.workTagButton}>Document</p>
                            <p className={styles.workTagButton}>Unreal Engine</p>
                            <p className={styles.workTagButton}>Substance Painter</p>
                        </div>
                    </div>

                    <div className={styles.workItem}>
                        <div className={styles.workThumbnail}>
                            <div className={styles.workHover}>
                                <p className={styles.workMore}>자세히보기</p>
                            </div>
                            <Image 
                                src={"/images/works/test/TestThumbnail.jpg"} 
                                fill
                                alt='test-thumbnail'
                                sizes='width: 100%'
                                style={{objectFit: "cover"}} />
                        </div>
                        <div className={styles.workText}>
                            <h3 className={styles.workTitle}>작업 제목 04</h3>
                            <p className={styles.workSub}>작업 내용을 한 줄 정도로 간단하게 적습니다.</p>
                        </div>
                        <div className={styles.workTags}>
                            <p className={styles.workTagButton}>Tech</p>
                            <p className={styles.workTagButton}>Unity</p>
                        </div>
                    </div>

                    <div className={styles.workItem}>
                        <div className={styles.workThumbnail}>
                            <div className={styles.workHover}>
                                <p className={styles.workMore}>자세히보기</p>
                            </div>
                            <Image 
                                src={"/images/works/test/TestThumbnail.jpg"} 
                                fill
                                alt='test-thumbnail'
                                sizes='width: 100%'
                                style={{objectFit: "cover"}} />
                        </div>
                        <div className={styles.workText}>
                            <h3 className={styles.workTitle}>작업 제목 05</h3>
                            <p className={styles.workSub}>작업 내용을 한 줄 정도로 간단하게 적습니다.</p>
                        </div>
                        <div className={styles.workTags}>
                            <p className={styles.workTagButton}>Document</p>
                            <p className={styles.workTagButton}>Notion</p>
                        </div>
                    </div>

                </section>

            </div>
        </section>
    )
}