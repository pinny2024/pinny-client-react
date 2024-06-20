import React, { useState, useEffect } from "react";
import FirstWeek from "./first-week-data";
import SecondWeek from "./second-week-data";
import ThirdWeek from "./third-week-data";
import FourWeek from "./four-week-data";
import WeekPlanStatisticsButton from "./week-plan-statistics-button";
import styles from '../../../css/plan/plan-statistics.module.css'; 

import { useNavigate } from "react-router-dom";

const WeekStatistics = ({ plans }) => {
  const navigate = useNavigate();
  const [selectedWeek, setSelectedWeek] = useState('third'); 

  useEffect(() => {
    setSelectedWeek('third');
  }, []);

  const handleChangeButtonClick = () => {
    navigate('/plan/plan-change-detail');
  };

  const handleWeekButtonClick = (week) => {
    setSelectedWeek(week);
  };

  let selectedGraph;
  switch (selectedWeek) {
    case 'first':
      selectedGraph = <FirstWeek />;
      break;
    case 'second':
      selectedGraph = <SecondWeek />;
      break;
    case 'third':
      selectedGraph = <ThirdWeek />;
      break;
    case 'fourth':
      selectedGraph = <FourWeek />;
      break;
    default:
      selectedGraph = <FirstWeek />;
  }

  return (
    <div className={styles.weekPlanStatistics}>
      <div className={styles.weekButtons}>
        <button 
          className={selectedWeek === 'first' ? styles.selectedButton : ''} 
          onClick={() => handleWeekButtonClick('first')}
        >
          1주일
        </button>
        <button 
          className={selectedWeek === 'second' ? styles.selectedButton : ''} 
          onClick={() => handleWeekButtonClick('second')}
        >
          2주일
        </button>
        <button 
          className={selectedWeek === 'third' ? `${styles.selectedButton}` : styles.weekButton} 
          onClick={() => handleWeekButtonClick('third')}
        >
          3주일
        </button>
        <button 
          className={selectedWeek === 'fourth' ? styles.selectedButton : ''} 
          onClick={() => handleWeekButtonClick('fourth')}
        >
          4주일
        </button>
      </div>
      <div className={styles.planGraph}>
        {selectedGraph}
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
