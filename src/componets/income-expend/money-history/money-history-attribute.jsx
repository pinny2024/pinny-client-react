import React, { useState } from "react";

import "../../../css/comm/index.css"
import styles from"../../../css/income-expend/money-history-attribute.module.css"

const MoneyHistoryAttribute = ({price, description, type, category}) => {
    let imgUrl = '';

    switch (category) {
        case "식비": imgUrl = "food"; break;
        case "교통수단": imgUrl = "car"; break;
        case "문화생활": imgUrl = "music"; break;
        case "금융": imgUrl = "money"; break;
        case "기타": imgUrl = "etc"; break;
        case "저축": imgUrl = "pig.svg"; break;
    }

    if (type === "수입") {
        imgUrl += "-green.svg";
    } else if (type === "지출" && category !== "저축") {
        imgUrl += "-red.svg";
    }

    const formattedPrice = price.toLocaleString();
    
    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <img src={`${process.env.PUBLIC_URL}/img/income-expend/icon/${imgUrl}`} className={styles['icon']} />
                <p className={styles['name']}>{description}</p>
                <p className={styles['price']}>{formattedPrice}원</p>
            </div>
        </div>
    )
}

export default MoneyHistoryAttribute;