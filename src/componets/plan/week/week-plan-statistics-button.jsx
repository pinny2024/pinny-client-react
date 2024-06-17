import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanButton from '../plan-btn/plan-buton';
import '../../../css/plan/week-plan-statistics-button.css'; 
import '../../../css/plan/plan-btn/plan-list.css'; 

const WeekPlanStatisticsButton = () => {
  const [weekPlans, setWeekPlans] = useState([]);

  useEffect(() => {
    fetchWeekPlans();
  }, []);

  const fetchWeekPlans = async () => {
    try {
      const user_id = localStorage.getItem("id");
      if (!user_id) {
        console.error("User ID not found in localStorage.");
        return;
      }

      const response = await axios.get(`http://localhost:8082/plans/${user_id}`);
      const plansWithImages = response.data
        .filter(plan => !plan.isClosed)
        .map(plan => ({
          ...plan,
          checkNum: plan.checkNum || 0 
        }));
      setWeekPlans(plansWithImages);
      console.log('Fetched week plans:', plansWithImages);
    } catch (error) {
      console.error('Error fetching week plans:', error);
    }
  };

  const handleButtonClick = (index, plan) => {
    console.log(`Button clicked: ${index}, ${plan.id}, ${plan.plan}, isChecked: ${plan.isChecked}`);
  };

  return (
    <div className="week-plan-statistics-button">
      {weekPlans.length > 0 ? (
        weekPlans.map((plan, index) => (
          <PlanButton
            key={index}
            index={index}
            plan={plan}
            isChecked={plan.isChecked}
            context="statistics"
            handleButtonClick={handleButtonClick}
            buttonStyle={`combined-button ${plan.isChecked ? 'checked' : ''}`}
          />
        ))
      ) : (
        <p>값을 넣어주세요.</p>
      )}
    </div>
  );
};

export default WeekPlanStatisticsButton;
