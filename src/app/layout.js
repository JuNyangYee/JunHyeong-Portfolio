import localFont from "next/font/local";
import "./globals.css";
import styles from "./layout.module.css";

// Components
import Nav from "@/components/navMenu/navMenu";
import FAB from "@/components/floatingButton/floatingButton";
import Logo from "@/components/logo/logo"

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

                <header className={styles.header}>
                    <div className={styles.gnb}>
                        <Logo></Logo>
                        <Nav></Nav>
                    </div>
                </header>

                <section className={styles.fab}>
                    <FAB></FAB>
                </section>
                
                {children}

            </body>
        </html>
    );
}