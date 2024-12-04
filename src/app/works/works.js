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
                    <div onClick={() => changeTag("unreal")} 
                    className={`${styles.button} ${now === "unreal" ? styles.active : styles.none}`} 
                    name="unreal">Unreal Engine</div>
                    <div onClick={() => changeTag("3D")} 
                    className={`${styles.button} ${now === "3D" ? styles.active : styles.none}`} 
                    name="3D">3D Graphics</div>
                    <div onClick={() => changeTag("etc")} 
                    className={`${styles.button} ${now === "etc" ? styles.active : styles.none}`} 
                    name="etc">Etc.</div>
                </div>

                <section className={styles.workList}>
                    {dataDraw(workData, now)}
                </section>

            </div>
        </section>
    )
}