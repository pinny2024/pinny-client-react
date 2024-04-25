import React from "react";

import "../../css/comm/index.css"
import styles from "../../css/quest/input-data.module.css"

const InputData = (props) => {
    return (
        <div className={styles['input-container']}>
            <div className={styles['title']}>내용을 입력해주세요</div>
            <div className={styles['input-box']}>
                <div className={styles['input-title']}>목표</div>
                <input 
                type="text"
                className={styles['input']}
                placeholder="헨드백 사기"
                />
            </div>
            <div className={styles['input-btn']}>다음</div>
        </div>
    )
}

export default InputData;