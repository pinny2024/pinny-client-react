import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanButton from '../plan-btn/plan-buton'; 

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
        .map(plan => ({
          ...plan,
        }));
      setWeekPlans(plansWithImages);
      console.log('Fetched week plans:', plansWithImages);
    } catch (error) {
      console.error('Error fetching week plans:', error);
    }
  };

  const handleButtonClick = (index, plan) => {
    console.log(`Button clicked: ${index}, ${plan.id}, ${plan.plan}, ${plan.isChecked}`);
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
            isClicked={false}
            context="view" 
            handleButtonClick={handleButtonClick}
            image={plan.image} 
          />
        ))
      ) : (
        <p>값을 넣어주세요.</p>
      )}
    </div>
  );
};

export default WeekPlanStatisticsButton;
