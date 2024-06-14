import React from "react";

import "../../css/comm/index.css"
import styles from "../../css/quest/background.module.css";

const BackgroundQuest = () => {
    return(
        <div className={styles['container']}>
            <p className={styles['title']}>90% 채워졌습니다!</p>
            <p className={styles['subtitle']}>얼마 안남았어요! 화이팅</p>
        </div>
    );
};

export default BackgroundQuest;