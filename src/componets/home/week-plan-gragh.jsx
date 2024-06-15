import React from "react";
import { Bar } from "react-chartjs-2";
import styles from '../../css/plan/plan-gragh-data.module.css'; 

const WeekPlanGragh = ({ budgetAmount }) => {
    const data = {
        labels: [''], 
        datasets: [
            {
                label: 'Budget',
                data: [budgetAmount],
                backgroundColor: '#5edcc4', 
                borderWidth: 0,
                borderRadius: 7,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, 
        layout: {
            padding: {
                top: 0, 
                right: 25, 
                left: 10, 
            },
        },
        indexAxis: 'y', 
        scales: {
            x: {
                display: false, 
            },
            y: {
                grid: {
                    display: false, 
                },
            },
        },
        plugins: {
            legend: {
                display: false, 
            },
            title: {
                display: false, 
            },
            annotation: {
                annotations: {
                    value: {
                        type: 'line',
                        xMin: budgetAmount,
                        xMax: budgetAmount,
                        borderColor: '#000000', 
                        borderWidth: 1,
                        label: {
                            enabled: true,
                            position: 'right', 
                            content: budgetAmount.toLocaleString() + '원', 
                            font: {
                                size: 12, 
                                weight: 'bold', 
                            },
                        },
                    },
                },
            },
            tooltip: {
                enabled: false, 
            },
        },
    };

    return (
        <div className={styles['week-graph']} style={{ height: '70px', backgroundColor: '#FFFFFF' }}>
            <div className={styles['graph']}>
                <Bar data={data} options={options} />
                <div className={styles['budget-amount']}>
                    {budgetAmount.toLocaleString()}원
                </div>
            </div>
        </div>
    );
};

export default WeekPlanGragh;
