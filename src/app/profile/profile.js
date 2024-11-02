import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <section id="profile" className={styles.profile}>

            <section className={styles.intro}>
                <div className={styles.bgTitle}>
                    <h1 className={styles.title}>PROFILE</h1>
                </div>
                <div className={styles.aboutMe}>
                    <div className={styles.profileImage}>
                        <Image src={"/images/Profile.png"} width={307} height={307} className={styles.image}></Image>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            <strong className={styles.krName}>문준형</strong>
                            <span className={styles.enName}>Moon JunHyeong</span>
                        </div>
                        <div className={styles.text}>
                            <p>
                                안녕하세요. <br />
                                꿈꾸는 모든 것을 만드는 <strong>테크니컬 아티스트 문준형</strong> 입니다.<br /> <br /> 
                                경험이 새로운 경험을 만든다는 생각으로 다양한 것을 시도하고 도전해보며, 어떤 문제가 발생하더라도, 다양한 경험 속에서 얻은 것들로 바탕으로 문제를 유연하게 대처해 나갑니다.
                            </p>
                        </div>
                        <Link href="https://junyangyee.notion.site/about-me?pvs=4" 
                        className={styles.more} target="_blank">
                            <span className={styles.moreText}>자기소개 더보기</span>
                            <Image src={"/icons/clickButton.svg"} width={19} height={19}></Image>
                        </Link>
                    </div>
                </div>
            </section>
            
        </section>
    )
}