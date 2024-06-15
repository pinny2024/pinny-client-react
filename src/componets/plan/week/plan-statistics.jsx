import React from "react";
import PlanGragh from "./plan-gragh-data";
import WeekPlanStatisticsButton from "./week-plan-statistics-button";
import styles from '../../../css/plan/plan-statistics.module.css'; 
import { useNavigate } from "react-router-dom";

const WeekStatistics = ({ plans }) => {
  const navigate = useNavigate();

  const handleChangeButtonClick = () => {
    navigate('/plan/plan-change-detail');
  };

  return (
    <div className={styles.weekPlanStatistics}>
      <div className={styles.planGraph}>
        <PlanGragh />
      </div>
      <div className={styles.allPlanStatistics}>
        <div className={styles.weekPlanStatisticsName}>
          이번주의 계획이예요!
        </div>
        <button className={`${styles.planCorrectionButton} ${styles.mint}`} onClick={handleChangeButtonClick}>
          수정하기
        </button>
      </div>
      <div className={styles.weekPlanStatisticsButton}>
        <WeekPlanStatisticsButton plans={plans} />
      </div>
    </div>
  );
};

export default WeekStatistics;
