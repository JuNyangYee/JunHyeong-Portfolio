import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
import LinkIcon from '@mui/icons-material/Link';

export default function Profile() {
    return (
        <section id="profile" className={styles.profile}>
            <div className={styles.innerPadding}>

                <section className={styles.intro}>
                    <div className={styles.bgTitle}>
                        <h1 className={styles.title}>PROFILE</h1>
                    </div>
                    <div className={styles.aboutMe}>
                        <div className={styles.profileImage}>
                            <Image 
                                src={"/images/Profile.png"} 
                                width={307} height={307} 
                                className={styles.image} 
                                alt="Profile Image" 
                            />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <strong className={styles.krName}>문준형</strong>
                                <span className={styles.enName}>Moon JunHyeong</span>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    안녕하세요. <br />
                                    <strong>팔망미인처럼 다재다능한 테크니컬 아티스트 문준형</strong> 입니다.<br /> <br /> 
                                    새롭고 다양한 것을 시도하고 도전해보며, 일곱빛의 무지개와 같은 경험들을 쌓아갑니다. 경험이라는 다양한 색을 바탕으로 피어난 새로운 8번째 색이 더해져 여덟색 · 팔방미인의 모습을 갖춘, 다양한 부분에서 활약하고 도움이 될 수 있는 테크니컬 아티스트가 되고자 합니다.
                                </p>
                            </div>
                            {/* <Link href="https://junyangyee.notion.site/about-me?pvs=4" 
                            className={styles.more} target="_blank">
                                <span className={styles.moreText}>자기소개 더보기</span>
                                <LinkIcon sx={{ color:"#787878" }} fontSize="small" />
                            </Link> */}
                        </div>
                    </div>
                </section>

                <section className={styles.activity}>
                    <div className={styles.actBox}>
                        <div className={styles.edu}>
                            <h3 className={styles.subTitle}>EDUCATION</h3>
                            <ul className={styles.subText}>
                                <li>
                                    <span>선린인터넷고등학교 멀티미디어과 졸업</span>
                                    <span className={styles.moreYear}>2017. 03 ~ 2020. 02</span>
                                </li>
                                <li>
                                    <span>서울예술대학교 디지털아트과 전문학사</span>
                                    <span className={styles.moreYear}>2020. 03 ~ 2025. 02</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.certification}>
                            <h3 className={styles.subTitle}>CERTIFICATION</h3>
                            <ul className={styles.subText}>
                                <li>
                                    <span>컴퓨터그래픽스운용기능사</span>
                                    <span className={styles.moreYear}>2019. 07</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.works}>
                            <h3 className={styles.subTitle}>WORKS</h3>
                            <ul className={styles.subText}>
                                <li>
                                    <span>CURTUREHUB RE-FEST 2021 - 1인 게임 전시</span>
                                    <span className={styles.moreYear}>2021</span>
                                </li>
                                <li>
                                    <span>한국콘텐츠진흥원 콘텐츠임팩트 다빈치 프로젝트 - 수료 및 VR 작품 전시</span>
                                    <span className={styles.moreYear}>2021</span>
                                </li>
                                <li>
                                    <span>Kiaf SEOUL 2024 - VR 작품 제작 및 전시</span>
                                    <span className={styles.moreYear}>2024</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.awards}>
                            <h3 className={styles.subTitle}>AWARDS</h3>
                            <ul className={styles.subText}>
                                <li>
                                    <span>Smarteen App Challange 엔터테인먼트(게임) 부문 참여</span>
                                    <span className={styles.moreYear}>2017</span>
                                </li>
                                <li>
                                    <span>T Academy 15회 앱잼 미래산업 - VR 게임 장려상</span>
                                    <span className={styles.moreYear}>2017</span>
                                </li>
                                <li>
                                    <span>SK 0와 함께하는 17회 앱잼 - VR 게임 장려상</span>
                                    <span className={styles.moreYear}>2019</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}