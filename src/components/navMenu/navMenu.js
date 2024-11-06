'use client';
import styles from "./nav.module.css";

export default function NavMenu() {

    const ScrollToID = function (id) {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    };

    return (
        <nav className={styles.menu}>
            <div className={styles.memuList}>

                <div className={styles.menuButton} onClick={() => ScrollToID("profile")}>PROFILE</div>

                <div className={styles.menuButton} onClick={() => ScrollToID("works")}>WORKS</div>

                <div className={styles.menuButton} onClick={() => ScrollToID("contact")}>CONTACT</div>

            </div>
        </nav>
    );
}