import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import { Bar } from "react-chartjs-2";
import styles from "../../css/plan/plan-gragh-data.module.css";

const WeekPlanGraph = ({ totalBudget }) => {
  const [remainingBudget, setRemainingBudget] = useState(() => {
    const savedBudget = localStorage.getItem("remainingBudget");
    return savedBudget !== null ? parseInt(savedBudget, 10) : 0;
  });
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`/budget/${userId}`)
      .then(response => {
        console.log("API Response:", response.data);
        const responseText = response.data;
        const remainingBudgetMatch = responseText.match(/남은금액 (\d+)원 남았습니다\./);
        if (remainingBudgetMatch && remainingBudgetMatch[1]) {
          const remainingBudget = parseInt(remainingBudgetMatch[1], 10);
          setRemainingBudget(remainingBudget);
          localStorage.setItem("remainingBudget", remainingBudget);
        } else {
          console.error("Could not parse remaining budget from response");
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching budget data:", error);
        setIsLoading(false);
      });
  }, [userId],[remainingBudget]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (remainingBudget === 0) {
    return <div>지출 비용이 초과되었어요! ㅠㅠ</div>;
  }


  const usedBudget = totalBudget - remainingBudget;
  const usedPercentage = Math.floor(((usedBudget / totalBudget) * 100).toFixed(2));

  const data = {
    labels: [''],
    datasets: [
      {
        label: '사용한 예산',
        data: [usedBudget],
        backgroundColor: '#5edcc4',
        borderWidth: 0,
        borderRadius: 7,
        barThickness: 30,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    layout: {
      padding: {
        right: 25,
        left: 10,
      },
    },
    scales: {
      x: {
        min: 0,
        max: totalBudget,
        grid: {
          display: false,
        },
        ticks: {
          display: false, 
        },
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
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className={styles['week-graph']} style={{ height: '70px', backgroundColor: '#FFFFFF' }}>
      <div className={styles['graph']}>
        <Bar data={data} options={options} />
        <div className={styles['budget-amount']}>
          {totalBudget.toLocaleString()}원
        </div>
        <div className={styles['used-percentage']}>
          {usedPercentage}%
        </div>
      </div>
    </div>
  );
};

export default WeekPlanGraph;
