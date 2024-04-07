import React, { useState } from "react";
import FirstWeek from "./first-week-data";
import SecondWeek from "./second-week-data";
import ThirdWeek from "./third-week-data";
import FourWeek from "./four-week-data";
import WeekStatistics from "./plan-statistics"; 
import '../../../css/plan/week-status-button.css';

const WeekStatusButton = () => {
   
    const [selectedWeek, setSelectedWeek] = useState(<FirstWeek />); 

    return (
        <div className="week-status-button">
            <button className="first-week" onClick={() => setSelectedWeek(<FirstWeek />)}>1주일</button>
            <button className="second-week" onClick={() => setSelectedWeek(<SecondWeek />)}>2주일</button>
            <button className="third-week" onClick={() => setSelectedWeek(<ThirdWeek />)}>3주일</button>
            <button className="fourth-week" onClick={() => setSelectedWeek(<FourWeek />)}>4주일</button>
            {/* 선택된 주차에 따라 WeekStatistics 컴포넌트를 렌더링하고, 선택된 주차를 props로 전달 */}
            <div>
                <WeekStatistics selectedWeek={selectedWeek} />
            </div>
        </div>
    );
};

export default WeekStatusButton;
