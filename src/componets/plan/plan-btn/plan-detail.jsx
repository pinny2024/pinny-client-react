// PlanDetail.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../../css/plan/plan-btn/plan-detail.css';

const PlanDetail = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState(""); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    };

    const handleNextButtonClick = () => {
        navigate('/plan/plan-list', { state: { inputValue } });
    };

    return (
        <div>
            <div className="top-detail">
                내용을 입력해주세요
            </div>
            <div className="detail-plan-box">
                계획
                <input
                    type="text" 
                    placeholder="편의점에서 3000원 이상 사지 않기"
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className="plan-detail-check">
                <button className={inputValue ? "mint-button" : "grey-button"} onClick={handleNextButtonClick}>확인</button>
            </div>
        </div>
    );
};

export default PlanDetail;
