import React, { useEffect, useState } from "react";
import MoneyHistoryAttribute from "./money-history-attribute";
import axios from "axios";
import config from "../../../config";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/money-history.module.css"

const MoneyHistory = () => {
    const userId = localStorage.getItem("id");
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${config.baseUrl}/transactions/${userId}/type`)
        .then((response) => {
            console.log(response);
            setTransactions(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className={styles['box']}>
            <div className={styles['day']}>9일</div>
            {transactions.map((transaction, index) => (
                <MoneyHistoryAttribute
                    key={index}
                    name={transaction.name}
                    description={transaction.description}
                    type={transaction.type}
                    category={transaction.category}
                />
            ))}
        </div>
    )
}

export default MoneyHistory;