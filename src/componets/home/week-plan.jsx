import React from "react";
import "../../css/home/week-plan.css";

const WeekPlan = () =>{
    return (
        <div className="bottom-plan">
            <div className="use-money">
                        
            </div> 
            <div className="week-plan">
                <div className="week-plan-name">
                    <span className="week-budget">일주일 예산</span>을<br />세워보세요!
                </div>
                        
                <div className="week-plan-button">
                    <button>예산 세우기</button>
                </div>
            </div>
            <hr />
            <div className="career">
                <div className="career-name">
                    오늘 <span className="action-plan">실천한 계획</span>을<br />체크해주세요!
                </div>
                <div className="career-button">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default WeekPlan;