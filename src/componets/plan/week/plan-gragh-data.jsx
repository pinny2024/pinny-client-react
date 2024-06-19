import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance"; 
import { Bar } from "react-chartjs-2";
import styles from "../../../css/plan/plan-gragh-data.module.css";

const PlanGragh = () => {
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [highestCategory, setHighestCategory] = useState("");
    const userId = localStorage.getItem("id");

    const allCategories = ["기타", "교통수단", "문화생활", "금융", "식비"]; 

    useEffect(() => {
        const fetchTransactionData = async () => {
            try {
                const response = await axios.get(`/transactions/${userId}/type`);
                const transactionsByDate = response.data;

                const allTransactions = transactionsByDate.flatMap(dateEntry => dateEntry.transactions);
                const expenditureTransactions = allTransactions.filter(transaction => transaction.type === '지출');

                const expenditureByCategory = allCategories.reduce((acc, category) => {
                    acc[category] = expenditureTransactions
                        .filter(transaction => transaction.category === category)
                        .reduce((sum, transaction) => sum + transaction.amount, 0);
                    return acc;
                }, {});

                const labels = Object.keys(expenditureByCategory);
                const data = Object.values(expenditureByCategory);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: '지출 금액',
                            data,
                            backgroundColor: '#79AFEF',
                            borderWidth: 0,
                            borderRadius: 7,
                        },
                    ],
                });

                const maxCategory = labels.reduce((prev, curr) => {
                    return expenditureByCategory[curr] > expenditureByCategory[prev] ? curr : prev;
                }, labels[0]);

                setHighestCategory(maxCategory);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching transaction data:", error);
                setIsLoading(false);
            }
        };

        fetchTransactionData();
    }, [userId]);

    const options = {
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 60,
                right: 10,
                left: 10,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles['graph-container']}>
            <div className={styles['graph']}>
                {chartData ? <Bar data={chartData} options={options} /> : <p className={styles['nullplus']}>지출을 추가해주세요!</p>}
                <p className={styles['title']}>
                    핀핀이님 {highestCategory}에 쓰는 돈을<br />줄여보는 건 어떨까요?
                </p>
            </div>
        </div>
    );
};

export default PlanGragh;
