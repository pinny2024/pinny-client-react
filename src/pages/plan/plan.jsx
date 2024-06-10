import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plan from '../../componets/plan/plan';

const PlanPage = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:8082/plans');
        const plansWithImages = response.data
          .filter(plan => plan.plan !== null && plan.plan.trim() !== '') // 빈 값을 가진 계획 제외
          .map(plan => {
            const category = plan.category || 'undefined';
            const imagePath = `${process.env.PUBLIC_URL}/img/job-plan/category-button/category-${category}-white.svg`;
            return {
              ...plan,
              image: imagePath
            };
          });
        setPlans(plansWithImages);
        console.log('Fetched plans:', plansWithImages);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div>
      <Plan plans={plans} />
      {/* 다른 PlanPage의 콘텐츠 */}
    </div>
  );
};

export default PlanPage;
