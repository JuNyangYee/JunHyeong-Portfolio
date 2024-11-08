import styles from "./contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.innerPadding}>
                <div className={styles.contactArea}>
                    <h1 className={styles.title}>CONTACT</h1>
                    <div className={styles.infoArea}>
                        <div className={styles.info}>
                            <span>E-MAIL.</span>
                            <span>answnsgud19@gmail.com</span>
                        </div>
                        <div className={styles.info}>
                            <span>INSTAGRAM.</span>
                            <span>@ju_nyang_yee</span>
                        </div>
                        <div className={styles.info}>
                            <span>LINK.</span>
                            <span>https://junyangyee.github.io/</span>
                        </div>
                        <div className={styles.info}>
                            <span>PHONE.</span>
                            <span>010.8627.4706</span>
                        </div>
                    </div>
                </div>
                <p className={styles.copyright}>Designed and developed by JunHyeong. © 2024 All rights reserved.</p>
            </div>
        </section>
    )
}