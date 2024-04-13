// JobPlanButton.js
import React from "react";

const JobPlanButton = ({ plan, handleShowModal }) => {
  return (
    <button onClick={() => handleShowModal({ 
      imageName: `${process.env.PUBLIC_URL}/img/job-plan/job-plan-image(${plan.id}).svg`,
      title: plan.title,
      job: plan.job,
    })}>
      <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/job-plan-image(${plan.id}).svg`} />
      <div className="job-plan-img-name">
        {plan.title}
      </div>
      <div className="job-plan-job">
        {plan.job}
      </div>
    </button>
  );
};

export default JobPlanButton;
