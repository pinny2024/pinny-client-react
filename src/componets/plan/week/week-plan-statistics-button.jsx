import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanButton from '../plan-btn/plan-buton'; // Adjust the import path as necessary

const WeekPlanStatisticsButton = ({ plans: initialPlans }) => {
  const [weekPlans, setWeekPlans] = useState([]);

  useEffect(() => {
    console.log('Initial plans in WeekPlanStatisticsButton:', initialPlans); // 여기서 데이터가 올바르게 출력되는지 확인합니다.

    if (initialPlans && initialPlans.length > 0) {
      setWeekPlans(initialPlans);
    } else {
      const fetchWeekPlans = async () => {
        try {
          const response = await axios.get('http://localhost:8082/plans');
          const validPlans = response.data.filter(plan => {
            return plan.plan && plan.plan.trim() !== '' && plan.category;
          });

          const plansWithImages = validPlans.map(plan => {
            const category = plan.category || 'undefined';
            return {
              ...plan,
              image: `${process.env.PUBLIC_URL}/img/job-plan/category-button/category-${category}-white.svg`
            };
          });

          setWeekPlans(plansWithImages);
          console.log('Fetched week plans:', plansWithImages);
        } catch (error) {
          console.error('Error fetching week plans:', error);
        }
      };

      fetchWeekPlans();
    }
  }, [initialPlans]);

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
          />
        ))
      ) : (
        <p>No plans available.</p>
      )}
    </div>
  );
};

export default WeekPlanStatisticsButton;
