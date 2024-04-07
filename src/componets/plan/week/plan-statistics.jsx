import React from "react";
import PlanGragh from "./plan-gragh-data";
import WeekPlanStatisticsButton from "./week-plan-statistics-button";
import '../../../css/plan/plan-statistics.css';

const PlanStatistics = () => {
    return (
        <div className="week-plan-statistics">
            <div className="plan-gragh">
                <PlanGragh />
            </div>
            <div className="week-plan-statistics-name">
                이번주의 계획이예요!
            </div>
            <div className="plan-correction">
                수정하기
            </div>
            <div className="week-plan-statistics-button">
                <WeekPlanStatisticsButton />
            </div>
        </div>
    )
}

export default PlanStatistics;