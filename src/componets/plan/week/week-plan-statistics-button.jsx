import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanButton from '../plan-btn/plan-buton'; // Adjust the import path as necessary

const WeekPlanStatisticsButton = () => {
  const [weekPlans, setWeekPlans] = useState([]);

  useEffect(() => {
    fetchWeekPlans();
  }, []);

  const fetchWeekPlans = async () => {
    try {
      const response = await axios.get('http://localhost:8082/plans');
      const plansWithImages = response.data
        .filter(plan => plan.plan !== null && plan.plan.trim() !== '') // 빈 값을 가진 계획 제외
        .map(plan => {
          const category = plan.category || 'undefined';
          return {
            ...plan,
          };
        });
      setWeekPlans(plansWithImages);
      console.log('Fetched week plans:', plansWithImages);
    } catch (error) {
      console.error('Error fetching week plans:', error);
    }
  };

  const handleButtonClick = (index, plan) => {
    console.log(`Button clicked: ${index}, ${plan.planId}, ${plan.plan}`);
    // Add your click handling logic here
  };

  return (
    <div className="week-plan-statistics-button">
      {weekPlans.length > 0 ? (
        weekPlans.map((plan, index) => (
          <PlanButton
            key={index}
            index={index}
            plan={plan}
            isClicked={false} // You can implement click state logic if needed
            context="view" // Specify the context or pass as prop
            handleButtonClick={handleButtonClick}
            image={plan.image} // Pass the image to PlanButton
          />
        ))
      ) : (
        <p>No plans available.</p>
      )}
    </div>
  );
};

export default WeekPlanStatisticsButton;
