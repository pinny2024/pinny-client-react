import React from "react";

import "../../css/comm/index.css"
import "../../css/income-expend/money-history-attribute.css"

const MoneyHistoryAttribute = () => {
    return (
        <div className="money-history-container">
            <div className="money-history-content">
                <img src={`${process.env.PUBLIC_URL}/img/income-expend/food-red-icon.svg`} className="money-history-icon" />
                <p className="money-history-name">붕어빵</p>
                <p className="money-history-price">3000원</p>
            </div>
        </div>
    )
}

export default MoneyHistoryAttribute;