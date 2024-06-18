import React, { useState } from "react";
import FirstWeek from "./first-week-data";
import SecondWeek from "./second-week-data";
import ThirdWeek from "./third-week-data";
import FourWeek from "./four-week-data";
import WeekStatistics from "./plan-statistics";
import styles from '../../../css/plan/week-status-button.module.css'; // Import CSS module

const WeekStatusButton = ({ plans }) => {
  const [selectedWeek, setSelectedWeek] = useState(<FirstWeek />);

  return (
    <div className={styles.weekStatusButton}>
      <button className = {styles.week}onClick={() => setSelectedWeek(<FirstWeek />)}>1주일</button>
      <button className = {styles.week}onClick={() => setSelectedWeek(<SecondWeek />)}>2주일</button>
      <button className = {styles.thirdweek}onClick={() => setSelectedWeek(<ThirdWeek />)}>3주일</button>
      <button className = {styles.week}onClick={() => setSelectedWeek(<FourWeek />)}>4주일</button>
      <div>
        <WeekStatistics selectedWeek={selectedWeek} plans={plans} />
      </div>
    </div>
  );
};

export default WeekStatusButton;
