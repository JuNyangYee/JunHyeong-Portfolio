import localFont from "next/font/local";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

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

const montserrat = localFont({
    src: "./fonts/Montserrat.woff2",
    variable: "--font-montserrat",
    display: "swap",
    subsets: ["latin"],
});

export const metadata = {
    title: "JunHyeong Portfolio | 문준형 포트폴리오",
    description: "[JunHyeong] 테크니컬 아티스트 문준형 포트폴리오입니다.",
    icons: {
        icon: "/icons/favicon.ico",
    },
    metadataBase: new URL("https://junyangyee.vercel.app/"),
    openGraph: {
        siteName: "JunHyeong Portfolio | 문준형 포트폴리오",
        title: "JunHyeong Portfolio | 문준형 포트폴리오",
        description: "[JunHyeong] 테크니컬 아티스트 문준형 포트폴리오입니다.",
        images: "images/OG-Image.png",
        url: "https://junyangyee.vercel.app/",
    },
};

export default function RootLayout({ children, modal }) {
    return (
        <html lang="kr">
            <body className={`${pretendard.className} ${montserrat.variable}`}>

                <header className={styles.header}>
                    <div className={styles.gnb}>
                        <Logo></Logo>
                        <Nav></Nav>
                    </div>
                </header>
                
                {children}
                {modal}

                <section className={styles.fab}>
                    <FAB></FAB>
                </section>

            </body>
        </html>
    );
}