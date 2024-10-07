import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "주냥이 포트폴리오",
    description: "문준형의 포트폴리오 페이지입니다.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="kr">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
            </body>
        </html>
    );
}
