import React from "react";
import MoneyHistoryAttribute from "./money-history-attribute";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/money-history.module.css"

const MoneyHistory = () => {
    return (
        <div className={styles['box']}>
            <div className={styles['day']}>9일</div>
            <MoneyHistoryAttribute />
            <MoneyHistoryAttribute />
            <MoneyHistoryAttribute />
        </div>
    )
}

export default MoneyHistory;