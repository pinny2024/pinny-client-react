import React, { useState } from 'react';
import '../../css/home/TopSheet.css'; 
import Calendar from 'react-calendar';

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

  return (
    <div className={`top-sheet ${open ? 'open' : ''}`}>
      <div className="content">
        <div className="header" onClick={toggleSheet}>
          <p>수입,지출기록</p>
          <button className="arrow-button" onClick={toggleFullCalendar}>
            {open ? '▼' : '▲'}
          </button>
        </div>
        <div className={`calendar-container ${open ? 'open' : ''} ${showFullCalendar ? 'show-full' : ''}`}>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default TopSheet;
