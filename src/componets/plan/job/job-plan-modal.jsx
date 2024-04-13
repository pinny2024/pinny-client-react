// JobPlanModal.js
import React from "react";
import { BsX } from "react-icons/bs";
import '../../../css/plan/job-plan-modal.css';

const JobPlanModal = ({ handleClose, show, modalInfo }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div onClick={handleClose}><BsX className="BsX" /></div>
        <div className="modal-profile">
          <img 
            src={modalInfo.imageName} 
            alt="modal-img" 
            className="modal-image" 
          />
          <div className="modal-info">
              <div className="job-plan-img-name">{modalInfo.title}</div>
              <div className="job-plan-job">{modalInfo.job}</div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL}/img/job-plan/gragh.svg`}></img>
      </section>
    </div>
  );
};

export default JobPlanModal;
