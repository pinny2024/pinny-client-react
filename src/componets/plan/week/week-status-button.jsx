import React, { useState } from "react";
import FirstWeek from "./first-week-data";
import SecondWeek from "./second-week-data";
import ThirdWeek from "./third-week-data";
import FourWeek from "./four-week-data";
import WeekStatistics from "./plan-statistics"; 
import '../../../css/plan/week-status-button.css';

const WeekStatusButton = ({ plans }) => {
  const [selectedWeek, setSelectedWeek] = useState(<FirstWeek />);

  // console.log('Plans in WeekStatusButton:', plans); // 여기서 데이터가 올바르게 출력되는지 확인합니다.

  return (
    <div className="week-status-button">
      <button className="first-week" onClick={() => setSelectedWeek(<FirstWeek />)}>1주일</button>
      <button className="second-week" onClick={() => setSelectedWeek(<SecondWeek />)}>2주일</button>
      <button className="third-week" onClick={() => setSelectedWeek(<ThirdWeek />)}>3주일</button>
      <button className="fourth-week" onClick={() => setSelectedWeek(<FourWeek />)}>4주일</button>
      <div>
        <WeekStatistics selectedWeek={selectedWeek} plans={plans} />
      </div>
    </div>
  );
};

export default WeekStatusButton;
