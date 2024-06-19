
import React from "react";

import "../../css/comm/index.css"
import styles from"../../css/home/moenyHistoryAttribute.module.css"

const NoneAttribute = () => {

    return (
        <div className={styles['text']}>
            <p className={styles['text-content']}>해당 날짜의 지출/입금 내역이 없습니다.</p>
        </div>
    )
}

export default NoneAttribute;