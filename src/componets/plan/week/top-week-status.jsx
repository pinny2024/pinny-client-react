import React, { useState } from "react";
import WeekStatusButton from "./week-status-button";
import '../../../css/plan/top-week-status.css';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const TopWeekStatus = ({ plans }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // console.log('Plans in Plan component:', plans);
  return (
    <div>
      <div className={`top-planning-background ${isExpanded ? 'expanded' : ''}`}>
        <div className="status-text">
          현황을 살펴보세요!
        </div>
        <div className="all-week-status-button">
          <WeekStatusButton plans={plans} />
        </div>
      </div>
      <div className="expand-button" onClick={toggleExpanded}>
        {isExpanded ? <BsChevronUp size={18} /> : <BsChevronDown size={18}/>}
      </div>
    </div>
  );
};

export default TopWeekStatus;
