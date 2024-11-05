'use client'
import { useState } from 'react';
import styles from "./works.module.css";

export default function Works() {
    const [now, changeTag] = useState(0);

    return (
        <section id="works" className={styles.works}>
            <div className={styles.innerPadding}>

                <h1 className={styles.title}>WORKS</h1>

                <div className={styles.tagSelect}>
                    <div onClick={() => changeTag(0)}
                    className={`${styles.button} ${now === 0 ? styles.active : styles.none}`} 
                    name="all">All
                    </div>
                    <div onClick={() => changeTag(1)} 
                    className={`${styles.button} ${now === 1 ? styles.active : styles.none}`} 
                    name="tech">Tech</div>
                    <div onClick={() => changeTag(2)} 
                    className={`${styles.button} ${now === 2 ? styles.active : styles.none}`} 
                    name="art">Art</div>
                    <div onClick={() => changeTag(3)} 
                    className={`${styles.button} ${now === 3 ? styles.active : styles.none}`} 
                    name="doc">Document</div>
                </div>

                <section className={styles.workList}>

                </section>

            </div>
        </section>
    )
}