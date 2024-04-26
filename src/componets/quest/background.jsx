import React from "react";

import "../../css/comm/index.css"
import styles from "../../css/quest/background.module.css";

const BackgroundQuest = (props) => {
    const {title, subtitle} = props;
    return(
        <div className={styles['container']}>
            <p className={styles['title']}>목표를 만들어주세요!</p>
            <p className={styles['subtitle']}>내가 이룰 목표를 만들어볼까요?</p>
        </div>
    );
};

export default BackgroundQuest;