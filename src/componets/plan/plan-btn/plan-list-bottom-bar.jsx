import React from "react";
import '../../../css/plan/plan-btn/plan-list-bottom-bar.css';

const PlanListBottomBar = ({ handleComplete, handleCancel }) => {
    
    return (
        <div id = "all-plan-bottom">
            <hr className="plan-list-bottom-hr"/>
            <div className="plan-list-bottom-bar">
                
                <button className="complete-button" onClick={handleComplete}>완료</button>
                <button className="cancel-button" onClick={handleCancel}>취소</button>
            </div>
        </div>
    );
}

export default PlanListBottomBar;
