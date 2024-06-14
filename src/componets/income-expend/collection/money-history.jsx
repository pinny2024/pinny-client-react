import React, { useEffect, useState } from "react";
import MoneyHistoryAttribute from "../money-history/money-history-attribute";
import axios from "axios";
import config from "../../../config";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/money-history.module.css"

const MoneyHistory = ({category}) => {
    const userId = localStorage.getItem("id");
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (category) {
            axios.get(`${config.baseUrl}/transactions/${userId}/category/${category}`)
                .then((response) => {
                    setTransactions(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [userId, category]);


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