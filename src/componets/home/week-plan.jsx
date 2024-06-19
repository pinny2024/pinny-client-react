import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axiosInstance";
import Modal from "./Modal";
import PlanButton from "../plan/plan-btn/plan-buton";
import WeekPlanGraph from "./week-plan-gragh"; 

import "../../css/home/week-plan.css";

const WeekPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const [plans, setPlans] = useState([]);
  const [totalBudget, setTotalBudget] = useState(() => {
    const savedBudget = localStorage.getItem("totalBudget");
    return savedBudget !== null ? parseInt(savedBudget, 10) : 0;
  });
  const [remainingBudget, setRemainingBudget] = useState(() => {
    const savedBudget = localStorage.getItem("remainingBudget");
    return savedBudget !== null ? parseInt(savedBudget, 10) : 0;
  });
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (totalBudget > 0) {
      localStorage.setItem("totalBudget", totalBudget);
    }
  }, [totalBudget]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get(`/plans/${userId}`);
      const plansWithImages = response.data.map(plan => ({
        ...plan,
        checkNum: plan.checkNum
      }));
      setPlans(plansWithImages);
    } catch (error) {
      console.error('Error fetching week plans:', error);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalConfirm = (budgetAmount, remainingAmount) => {
    setTotalBudget(budgetAmount);
    setRemainingBudget(remainingAmount);
  };

  const handleButtonClick = async (index, plan) => {
    try {
      const response = await axios.post(`/plans/${plan.id}/check`);

      if (response.status === 200) {
        const updatedPlan = { 
          ...response.data,
          isChecked: response.data.isChecked  
        };

        const updatedPlans = [...plans];
        updatedPlans[index] = updatedPlan;
        setPlans(updatedPlans);
        localStorage.setItem(`plan-${plan.id}-lastChecked`, new Date().toISOString()); 

        console.log(`Button clicked: ${index}, ${plan.id}, ${plan.plan}, isChecked: ${updatedPlan.isChecked}, checkNum: ${updatedPlan.checkNum}`);
      }
    } catch (error) {
      console.error('Error checking plan:', error);
    }
  };

  return (
    <div className="bottom-plan">
      <div className="week-plan">
        {totalBudget > 0 ? (
          <>
            <div className="week-plan-name">
              남은 <span className="week-budget">일주일 예산</span>을
              <br />
              확인해보세요!
            </div>
            <WeekPlanGraph totalBudget={totalBudget} remainingBudget={remainingBudget} />
          </>
        ) : (
          <div className="week-plan-button">
            <div className="week-plan-name">
              <span className="week-budget">일주일 예산</span>을
              <br /> 
              세워보세요!
            </div>
            <button onClick={handleShowModal}>예산 세우기</button>
          </div>
        )}
      </div>
      <hr />
       
      <div className="career">
        <div className="career-name">
          오늘 <span className="action-plan">실천한 계획</span>을
          <br />
          체크해주세요!
        </div>
        <div className="career-button">
          {plans.map((plan, index) => (
            <PlanButton
              key={index}
              index={index}
              plan={plan}
              isChecked={plan.isChecked} 
              handleButtonClick={() => handleButtonClick(index, plan)}
              buttonStyle="week-checked-button" 
            />
          ))}
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} handleConfirm={handleModalConfirm} />
    </div>
  );
};

export default WeekPlan;
