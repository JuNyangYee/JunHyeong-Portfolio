'use client'
import { useState } from 'react';
import styles from "./works.module.css";
import WorkItem from "@/components/workItem/workItem";
import workData from "./works.json";

export default function Works() {
    const [now, changeTag] = useState("all");

    function dataDraw(workData, now) {
        return (
            workData.works.map((work) => 
                <WorkItem 
                    key={work.index}
                    info={work}
                    now={now}
                />
            )
        )
    }

    return (
        <section id="works" className={styles.works}>
            <div className={styles.innerPadding}>

                <h1 className={styles.title}>WORKS</h1>

                <div className={styles.tagSelect}>
                    <div onClick={() => changeTag("all")}
                    className={`${styles.button} ${now === "all" ? styles.active : styles.none}`} 
                    name="all">All
                    </div>
                    <div onClick={() => changeTag("tech")} 
                    className={`${styles.button} ${now === "tech" ? styles.active : styles.none}`} 
                    name="tech">Tech</div>
                    <div onClick={() => changeTag("art")} 
                    className={`${styles.button} ${now === "art" ? styles.active : styles.none}`} 
                    name="art">Art</div>
                    <div onClick={() => changeTag("doc")} 
                    className={`${styles.button} ${now === "doc" ? styles.active : styles.none}`} 
                    name="doc">Document</div>
                </div>

                <section className={styles.workList}>
                    {dataDraw(workData, now)}
                </section>

            </div>
        </section>
    )
}