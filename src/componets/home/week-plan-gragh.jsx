import React from "react";
import { Bar } from "react-chartjs-2";
import styles from '../../css/plan/plan-gragh-data.module.css'; // Import CSS module

const WeekPlanGragh = ({ budgetAmount }) => {
    const data = {
        labels: [''], // Label for the bar
        datasets: [
            {
                label: 'Budget',
                data: [budgetAmount], // Pass budgetAmount as data
                backgroundColor: '#5edcc4', // Blue color for bars
                borderWidth: 0,
                borderRadius: 7,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, // Allow the chart to stretch to fill the container
        layout: {
            padding: {
                top: 0, // Adjust the padding from the top
                right: 25, // Add 20px padding to the right
                left: 10, // Add 20px padding to the left
            },
        },
        indexAxis: 'y', // Display the bars horizontally
        scales: {
            x: {
                display: false, // Hide x-axis
            },
            y: {
                grid: {
                    display: false, // Hide both vertical grid lines
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            title: {
                display: false, // Hide the title
            },
            annotation: {
                annotations: {
                    value: {
                        type: 'line',
                        xMin: budgetAmount,
                        xMax: budgetAmount,
                        borderColor: '#000000', // Black color for the line
                        borderWidth: 1,
                        label: {
                            enabled: true,
                            position: 'right', // Position the label to the right of the line
                            content: budgetAmount.toLocaleString() + '원', // Display budgetAmount with formatting
                            font: {
                                size: 12, // Set the font size
                                weight: 'bold', // Set the font weight to bold
                            },
                        },
                    },
                },
            },
            tooltip: {
                enabled: false, // Disable tooltips
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
                {/* Display budgetAmount inside the graph */}
            </div>
        </div>
    );
};

export default WeekPlanGragh;
