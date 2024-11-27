import styles from "./imgModal.module.css";
import Image from "next/image";

export default function ImgModal(props) {

    const img = props.img;
    const clickImg = props.clickImg;

    return (
        <div className={styles.imgModal} onClick={clickImg}>
            <div className={styles.imgInner}>
                <div className={styles.imgSection}>
                    <Image 
                        src={img.url} 
                        fill 
                        alt={img.alt} 
                        style={{objectFit: "contain"}}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}