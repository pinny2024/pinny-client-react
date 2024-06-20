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
            title: '우락밤 성찬이님',
            job: '2년차 초등학교 선생님',
        },
        {
            id: 2,
            title: '불같은 마무리',
            job: '네이버 백엔드 개발자',
        },
        {
            id: 3,
            title: '은돌이',
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
