import React from "react";

import "../../css/comm/index.css"
import styles from "../../css/quest/input-data.module.css"

const InputData = (props) => {
    return (
        <div className={styles['input-container']}>
            <div className={styles['title']}>{props.title}</div>
            <div className={styles['input-box']}>
                <div className={styles['input-title']}>{props.inputTitle}</div>
                <input 
                type="text"
                className={styles['input']}
                placeholder="헨드백 사기"
                />
            </div>
            <div className={styles['input-btn']}>{props.btn}</div>
        </div>
    )
}

export default InputData;