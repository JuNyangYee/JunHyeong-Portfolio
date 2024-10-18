import styles from "./main.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1 className={styles.titleText}>꿈꾸는 모든 것을 만들다</h1>
                <p className={styles.titleSub}>다재다능 테크니컬 아티스트를 꿈꾸는 문준형입니다.</p>
            </div>
            <div className={styles.image}>
                <Image src={"/images/Profile_Avatar.png"} fill></Image>
            </div>
        </main>
    );
}