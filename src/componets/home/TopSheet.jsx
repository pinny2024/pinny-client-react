import React, { useState } from 'react';
import '../../css/home/TopSheet.css'; 
import Calendar from 'react-calendar';
import '../../css/home/Calendar.css'; 
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const TopSheet = () => {
  const [open, setOpen] = useState(false);
  const [showFullCalendar, setShowFullCalendar] = useState(false);

  const toggleSheet = () => {
    setOpen(!open);
    setShowFullCalendar(false); // 화살표를 누를 때마다 캘린더를 숨김
  };

  const toggleFullCalendar = () => {
    setShowFullCalendar(!showFullCalendar);
  };

  const [value, onChange] = useState(new Date());
  
  
  return (
    <div className={`top-sheet ${open ? 'open' : ''}`}>
      <div className="content">
        <div className="header">
          <p>수입,지출기록</p>
        </div>
        
        <div className={`calendar-container ${open ? 'open' : ''} ${showFullCalendar ? 'show-full' : ''}`}>
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>

        <div className="arrow-button" onClick={toggleSheet}>
            {open ? <BsChevronUp /> : <BsChevronDown />}
        </div>
        
        
      </div>
    </div>
  );
};

export default TopSheet;
