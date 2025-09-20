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
                                    <strong>안녕하세요. <br />
                                    일곱 빛의 경험을 바탕으로, 여덟 빛 팔방미인이 되고자하는 문준형 입니다. </strong><br /> <br /> 
                                    저는 새로운 도전을 두려워하지 않고 그 도전을 통한 다양한 경험을 바탕으로 새로운 것을 빠르게 배우고 문제를 해결해나갑니다.
                                    그렇게 쌓아진 일곱 빛 무지개와 같은 경험들을 바탕으로 성장하여, 여덟 빛 팔방미인의 모습을 갖춘, 다양한 부분에서 활약하고 도움이 될 수 있는 사람이 되고자 합니다.<br />
                                    앞으로도 계속해서 도전을 멈추지 않고, 변화하는 환경 속에서 성장하며 더 나은 결과물을 만들어가겠습니다.
                                </p>
                            </div>
                            <Link href="https://junyangyee.notion.site/about-me?pvs=4" 
                            className={styles.more} target="_blank">
                                <span className={styles.moreText}>자기소개 더보기</span>
                                <LinkIcon sx={{ color:"#787878" }} fontSize="small" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className={styles.activity}>
                    <div className={styles.actBox}>
                        <div className={styles.career}>
                            <h3 className={styles.subTitle}>CAREER</h3>
                            <ul className={styles.subText}>
                                <li>
                                    <span>펄어비스 TA(쉐이더·프로시듀얼팀) 인턴</span>
                                    <span className={styles.moreYear}>2025. 06 ~ 2025. 08</span>
                                </li>
                            </ul>
                        </div>
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
                                <li>
                                    <span>Altered Nature: 혼합된 미래 (2025) - VR 작품 전시</span>
                                    <span className={styles.moreYear}>2025</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.awards}>
                            <h3 className={styles.subTitle}>AWARDS</h3>
                            <ul className={styles.subText}>
                                <li>
                                    <span>Smarteen App+ Challenge 2017 엔터테인먼트(게임) 부문 입선</span>
                                    <span className={styles.moreYear}>2017</span>
                                </li>
                                <li>
                                    <span>T Academy 15회 앱잼 미래산업(신기술) - VR 게임 장려상</span>
                                    <span className={styles.moreYear}>2018. 04</span>
                                </li>
                                <li>
                                    <span>SK 0과 함께하는 17회 앱잼 미래산업 - VR 게임 장려상</span>
                                    <span className={styles.moreYear}>2018. 12</span>
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
                    </div>
                </section>

            </div>
        </section>
    )
}