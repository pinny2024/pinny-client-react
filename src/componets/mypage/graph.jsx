import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "../../css/mypage/graph.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { resolve } from "chart.js/helpers";
import { BsBorderWidth } from "react-icons/bs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Graph = () => {
    const data = {
        labels: ['평균', '핑핑이'],
        datasets: [{
            axis: 'y',
            data: [0.5, 0.6],
            fill: false,
            backgroundColor: [
                'rgba(255, 255, 255)',
                'rgba(255, 255, 255)',
            ],
            borderRadius: 100,
            maxBarThickness: 28,
        }]
    };

    const options = {
        indexAxis: 'y',
        resolve: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        layout: {
            padding: 20
        },
        scales: {
            x: {
                max: 1.0,
                min: 0.0,
                grid: {
                    display: false,
                    color: "#fff",
                },
                ticks: {
                    color: "#fff"
                }
            },
            y: {
                display: false,
                grid: {
                    display: false,
                    color: "#fff",
                },
                ticks: {
                    color: "#fff"
                }
            }
        }
    };

    return (
        <div className={styles['container']}>
            <p className={styles['title']}>나의 <span style={{ color: '#38D6B8' }}>과소비 지수</span>를 알아보세요!</p>
            <div className={styles['graph']}>
                <Bar data={data} options={options} />
            </div>
            <p className={styles['name1']}>평균</p>
            <p className={styles['name2']}>핑핑이님</p>
        </div>
    );
};

export default Graph;
