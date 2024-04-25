import React from "react";

import "../../../css/comm/index.css"
import styles from"../../../css/income-expend/money-history-attribute.module.css"

const MoneyHistoryAttribute = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <img src={`${process.env.PUBLIC_URL}/img/income-expend/food-red-icon.svg`} className={styles['icon']} />
                <p className={styles['name']}>붕어빵</p>
                <p className={styles['price']}>3000원</p>
            </div>
        </div>
    )
}

export default MoneyHistoryAttribute;