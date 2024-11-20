import styles from "./main.module.css";
import Image from "next/image";

export default function Main() {
    return (
        <main id="main" className={styles.main}>
            <section className={styles.mainPage}>

                <div className={styles.title}>
                    <h1 className={styles.titleText}>꿈꾸는 모든 것을 만들다</h1>
                    <p className={styles.titleSub}>다재다능 테크니컬 아티스트를 꿈꾸는 문준형입니다.</p>
                </div>
                
            </section>

            <div className={styles.bgTitle}>
                <h1 className={styles.bgTitleText}>PORTFOLIO</h1>
            </div>

            <div className={styles.imgArea}>
                <div className={styles.mainImage}>
                    <Image 
                        src={"/images/Profile_Avatar.png"} 
                        fill
                        alt="MainImage" 
                        style={{objectFit: "contain", objectPosition: "bottom"}}
                    />
                </div>
                <div className={styles.scrollIcon}>
                    <Image 
                        src={"/images/ScrollDown.png"} 
                        fill
                        alt="ScrollImage" 
                    />
                </div>
            </div>
        </main>
    )
}