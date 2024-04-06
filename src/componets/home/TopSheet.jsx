import React, { useState } from 'react';
import '../../css/home/TopSheet.css'; 
import Calendar from 'react-calendar';
import '../../css/home/Calendar.css'; 
import BottomSheet from './BottomSheet'; // BottomSheet 컴포넌트 import
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const TopSheet = () => {
  const [open, setOpen] = useState(false);
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // 선택된 날짜를 저장하는 상태 변수
  const [showBottomSheet, setShowBottomSheet] = useState(false); // BottomSheet 표시 여부를 제어하는 상태 변수

  const toggleSheet = () => {
    setOpen(!open);
    setShowFullCalendar(false); 
  };

  const toggleFullCalendar = () => {
    setShowFullCalendar(!showFullCalendar);
  };

  // onChange 함수 정의
  const onChange = (value) => {
    setSelectedDate(value); // 선택된 날짜 설정
  };

  const handleDateClick = (value) => {
    setSelectedDate(value); // 선택된 날짜 설정
    setShowBottomSheet(true); // BottomSheet 표시
  };

  const renderDay = (locale, date) => {
    return (
      <div className="calendar-day" onClick={() => handleDateClick(date)}>
        <div className="calendar-day-number">{date.toLocaleString("en", {day: "numeric"})}</div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  };

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
              onChange={onChange} // onChange 함수 연결
              value={selectedDate} // value를 selectedDate로 변경
              formatDay={(locale, date) => renderDay(locale, date)}
              calendarType="gregory"
              formatMonthYear={(locale, date) => {
                return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}`;
              }}
            />
          </div>
        </div>

        <div className="arrow-button" onClick={toggleSheet}>
          {open ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      {/* BottomSheet 컴포넌트를 SlidingPanel 대신에 사용 */}
      <BottomSheet isOpen={showBottomSheet} onClose={() => setShowBottomSheet(false)}>
        {/* BottomSheet 내부에 넣을 내용 */}
        {/* 선택된 날짜에 관한 내용을 넣으세요 */}
        <p>선택된 날짜: {selectedDate ? selectedDate.toLocaleDateString() : '날짜를 선택해주세요'}</p>
      </BottomSheet>
    </div>
  );
};

export default TopSheet;
