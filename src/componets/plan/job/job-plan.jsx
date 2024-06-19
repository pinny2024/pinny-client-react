import React, { useState } from "react";
import '../../../css/plan/job-plan.css';
import JobPlanButton from "./job-plan-button";
import JobPlanModal from "./job-plan-modal";

const JobPlan = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedModal, setSelectedModal] = useState(null);

    const handleShowModal = (modalInfo) => {
        setSelectedModal(modalInfo);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const jobPlans = [
        {
            id: 1,
            title: '웨이드 웨이드',
            job: '2년차 주니어 개발자',
        },
        {
            id: 2,
            title: '어이거기너',
            job: '네이버 백엔드 근무',
        },
        {
            id: 3,
            title: '워커홀릭',
            job: '중학교 정보교사',
        },
    ];

    return (
        <div className="job-plan-manage">
            <div className="job-plan-name">
                나와 같은 직종은 이렇게<br />관리해요!
            </div>
            <div className="job-plan-button">
                {jobPlans.map((plan) => (
                    <JobPlanButton 
                        key={plan.id} 
                        plan={plan} 
                        handleShowModal={handleShowModal} 
                    />
                ))}
            </div>
            {selectedModal && <JobPlanModal 
                show={showModal} 
                handleClose={handleCloseModal} 
                modalInfo={selectedModal}  
            />}
        </div>
    )
}

export default JobPlan;
