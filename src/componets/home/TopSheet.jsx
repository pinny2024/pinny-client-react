import React, { useState } from 'react';
import '../../css/home/TopSheet.css'; 
import Calendar from 'react-calendar';
import '../../css/home/Calendar.css'; 
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const TopSheet = () => {
  const [open, setOpen] = useState(false);
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const [value, onChange] = useState(new Date());

  const toggleSheet = () => {
    setOpen(!open);
    setShowFullCalendar(false);
  };

  const toggleFullCalendar = () => {
    setShowFullCalendar(!showFullCalendar);
  };

  const renderDay = (locale, date) => {
    // 원형 점 2개 표시코드
    return (
      <div className="calendar-day">
        <div className="calendar-day-number">{date.toLocaleString("en", {day: "numeric"})}</div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  };

/*--------------------------------------------------*/
  return (
    <div className={`top-sheet ${open ? 'open' : ''}`}>
      <div className="content">
        <div className="header">
          <p>수입,지출기록</p>
        </div>
        
        <div className={`calendar-container ${open ? 'open' : ''} ${showFullCalendar ? 'show-full' : ''}`}>
          <div>
            <Calendar 
              className="calendar" 
              onChange={onChange} 
              value={value}
              formatDay={(locale, date) => renderDay(locale, date)}
              calendarType="gregory"
              formatMonthYear={(locale, date) => {
                // 원하는 형식으로 날짜 포맷
                return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}`;
                
              }}
              
              />
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
