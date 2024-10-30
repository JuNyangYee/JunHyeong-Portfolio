import styles from "./main.module.css";
import Image from "next/image";

export default function Main() {
    return (
        <main className={styles.main}>
            <section className={styles.mainPage}>
                <div className={styles.title}>
                    <h1 className={styles.titleText}>꿈꾸는 모든 것을 만들다</h1>
                    <p className={styles.titleSub}>다재다능 테크니컬 아티스트를 꿈꾸는 문준형입니다.</p>
                </div>
                
                <div className={styles.imgArea}>
                    <div className={styles.image}>
                        <Image src={"/images/Profile_Avatar.png"} fill objectFit="contain" alt="MainImage"></Image>
                    </div>
                    <div className={styles.scrollDown}>
                        <Image src={"/images/ScrollDown.png"} fill alt="ScrollImage"></Image>
                    </div>
                </div>
            </section>
        </main>
    )
}