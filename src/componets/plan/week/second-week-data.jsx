import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import styles from "../../../css/plan/plan-gragh-data.module.css";

const SecondWeek = () => {
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [highestCategory, setHighestCategory] = useState("");
    const userId = localStorage.getItem("id");

    const allCategories = ["기타", "교통수단", "문화생활", "금융", "식비"];

    useEffect(() => {
        const fetchData = async () => {
            const labels = ["기타", "교통수단", "문화생활", "금융", "식비"];
            const data = [20000, 35000, 90000, 40000, 50000]; //지출데이터 넣은 것
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>

            const highest = allCategories[data.indexOf(Math.max(...data))];

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
            setHighestCategory(highest);
            setIsLoading(false);
        };

        fetchData();
    }, []);

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

export default SecondWeek;
