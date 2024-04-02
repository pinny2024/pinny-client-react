import React from "react";
import MoneyHistoryAttribute from "./money-history-attribute";

import "../../css/comm/index.css"
import "../../css/income-expend/money-history.css"

const MoneyHistory = () => {
    return (
        <div className="money-history-box">
            <div className="money-history-day">9일</div>
            <MoneyHistoryAttribute />
            <MoneyHistoryAttribute />
            <MoneyHistoryAttribute />

        </div>
    )
}

export default MoneyHistory;