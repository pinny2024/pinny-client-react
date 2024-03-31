import React, { useState } from "react";
import Modal from "./Modal";

import "../../css/home/week-plan.css";

const WeekPlan = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bottom-plan">
      <div className="use-money"></div>
      <div className="week-plan">
        <div className="week-plan-name">
          <span className="week-budget">일주일 예산</span>을
          <br />
          세워보세요!
        </div>

        <div className="week-plan-button">
          <button onClick={handleShowModal}>예산 세우기</button>
        </div>
      </div>
      <hr />
      <div className="career">
        <div className="career-name">
          오늘 <span className="action-plan">실천한 계획</span>을
          <br />
          체크해주세요!
        </div>
        <div className="career-button">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default WeekPlan;
