import React from "react";
import { Bar } from "react-chartjs-2";
import styles from '../../../css/plan/plan-gragh-data.module.css'; 

const PlanGragh = () => {
    const data = {
        labels: ['기타', '교통수단', '문화생활', '금융', '식비'],
        datasets: [
            {
                label: 'Data',
                data: [10, 20, 30, 40, 50],
                backgroundColor: '#79AFEF', 
                borderWidth: 0,
                borderRadius: 7,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, 
        layout: {
            padding: {
                top: 30, 
                right:10,
                left:10,
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
        },
        tooltips: {
            enabled: false,
        },
    };

    return (
        <div className={styles['graph-container']}>
            <div className={styles['graph']}>
                <Bar data={data} options={options} />
                <p className={styles['title']}>핀핀이님 식비에 쓰는 돈을<br />줄여보는 건 어떨까요?</p> 
            </div>
        </div>
    );
};

export default PlanGragh;
