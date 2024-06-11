import React from "react";
import { Bar } from "react-chartjs-2";
import styles from '../../../css/plan/plan-gragh-data.module.css'; // Import CSS module

const PlanGragh = () => {
    const data = {
        labels: ['기타', '교통수단', '문화생활', '금융', '식비'],
        datasets: [
            {
                label: 'Data',
                data: [10, 20, 30, 40, 50],
                backgroundColor: '#79AFEF', // Blue color for bars
                borderWidth: 0,
                borderRadius: 7,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, // Allow the chart to stretch to fill the container
        layout: {
            padding: {
                top: 30, // Adjust the padding from the top
                right:10,
                left:10,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Hide both vertical grid lines
                },
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            title: {
                display: false, // Hide the title
            },
        },
        tooltips: {
            enabled: false, // Disable tooltips
        },
    };

    return (
        <div className={styles['graph-container']}>
            <div className={styles['graph']}>
                <Bar data={data} options={options} />
                <p className={styles['title']}>핀핀이님 식비에 쓰는 돈을<br />줄여보는 건 어떨까요?</p> {/* Text positioned in the top-left corner */}
            </div>
        </div>
    );
};

export default PlanGragh;
