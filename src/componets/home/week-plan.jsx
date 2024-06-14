import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Modal from "./Modal";
import PlanButton from "../plan/plan-btn/plan-buton";
import WeekPlanGragh from "./week-plan-gragh"; 

import "../../css/home/week-plan.css";

const WeekPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const [plans, setPlans] = useState([]);
  const [budgetAmount, setBudgetAmount] = useState(0);
  const user_id = localStorage.getItem("id");
  const { id: planId } = useParams(); 

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/plans/${user_id}`);
      const plansWithImages = response.data
        .filter(plan => plan.plan !== null && plan.plan.trim() !== '') 
        .map(plan => {
          return ({
          ...plan,
          isChecked: plan.isChecked,
        })
      });
      setPlans(plansWithImages);
      console.log('Fetched week plans:', plansWithImages);
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

  const handleConfirmBudget = (amount) => {
    setBudgetAmount(amount);
    setShowModal(false);
  };

  const handleButtonClick = async (index, plan) => {
    try {
      const updatedPlan = { ...plan, isChecked: !plan.isChecked };
      const response = await axios.put(`http://localhost:8082/plans/${plan.id}`, updatedPlan);

      if (response.status === 200) {
        const updatedPlans = [...plans];
        updatedPlans[index] = updatedPlan;
        setPlans(updatedPlans);
        console.log(`Button clicked: ${index}, ${plan.id}, ${plan.plan}, isChecked: ${updatedPlan.isChecked}`);
      }
    } catch (error) {
      console.error('Error updating plan isChecked state:', error);
    }
  };

  return (
    <div className="bottom-plan">
      <div className="week-plan">
        {budgetAmount > 0 ? (
          <>
            <div className="week-plan-name">
              남은 <span className="week-budget">일주일 예산</span>을
              <br />
              확인해보세요!
            </div>
            <WeekPlanGragh budgetAmount={budgetAmount} />
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
              context="view"
              // image={plan.image}
              handleButtonClick={handleButtonClick}
              buttonStyle="week-checked-button" 
            />
          ))}
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} handleConfirm={handleConfirmBudget} />
    </div>
  );
};

export default WeekPlan;
