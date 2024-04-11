import React, { useState } from "react";
import { BsX } from "react-icons/bs";

const JobPlanModal = ({ handleClose, show }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div onClick={handleClose}><BsX className="BsX" /></div>
        <div className="modal-money">이번주에 사용할 돈은<br />얼마인가요?</div>
        <img src={`${process.env.PUBLIC_URL}/img/job-plan/job-plan-image(1).svg`} alt="img(1)" />
      </section>
      
    </div>
  );
};

export default JobPlanModal;
