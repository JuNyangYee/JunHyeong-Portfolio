import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import styles from "./layout.module.css";
import Nav from "../components/navMenu";
import Link from "next/link";

const pretendard = localFont({
    src: "./fonts/PretendardVariable.woff2",
    variable: "--font-pretendard",
    display: "swap",
    weight: "45 920",
});

export const metadata = {
    siteName: "JunHyeong Portfolio | 문준형 포트폴리오",
    title: "꿈꾸는 모든 것을 만들다.",
    description: "문준형의 포트폴리오 페이지입니다.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="kr">
            <body className={pretendard.className}>
                <header className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="./">
                            <Image src={"/images/logo.png"} width={200} height={36} alt="JunHyeong"/>
                        </Link>
                    </div>
                    <Nav></Nav>
                    <div className={styles.contact}>
                            <ul className={styles.contactList}>
                                <li>
                                    <a href="https://www.instagram.com/ju_nyang_yee/" target="_blank">
                                        <Image src={"/icons/Instagram.svg"} width={26} height={26} alt="Instagram" title="Instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <Image src={"/icons/LinkedIn.svg"} width={26} height={26} alt="LinkedIn" title="LinkedIn"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:answnsgud19@gmail.com">
                                        <Image src={"/icons/Mail.svg"} width={26} height={26} alt="Mail" title="Mail"/>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}