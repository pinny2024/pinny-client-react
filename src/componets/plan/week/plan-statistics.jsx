import React from "react";
import PlanGragh from "./plan-gragh-data";
import WeekPlanStatisticsButton from "./week-plan-statistics-button";
import '../../../css/plan/plan-statistics.css';
import { useNavigate } from "react-router-dom";

const WeekStatistics = ({ plans }) => {
  const navigate = useNavigate();

//   console.log('Plans in WeekStatistics:', plans); // 여기서 데이터가 올바르게 출력되는지 확인합니다.

  const handleChangeButtonClick = () => {
    navigate('/plan/plan-change-detail');
  };

  return (
    <div className="week-plan-statistics">
      <div className="plan-gragh">
        <PlanGragh />
      </div>
      <div className="all-plan-statistics">
        <div className="week-plan-statistics-name">
          이번주의 계획이예요!
        </div> 
        <button className="plan-correction-button mint" onClick={handleChangeButtonClick}>
          수정하기
        </button>
      </div>
      <div className="week-plan-statistics-button">
        <WeekPlanStatisticsButton plans={plans} />
      </div>
    </div>
  );
};

export default WeekStatistics;
