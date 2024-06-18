import React, { useEffect, useState } from 'react';
import styles from '../../css/home/TopSheet.module.css';
import Calendar from 'react-calendar';
import calendarStyles from '../../css/home/Calendar.css';
import BottomSheet from './BottomSheet';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import axios from 'axios';
import config from "../../config";
import MoneyHistoryAttribute from "./MoneyHistoryAttribute";

const TopSheet = () => {
  const [open, setOpen] = useState(false);
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [bottomSheetData, setBottomSheetData] = useState(null);
  const userId = localStorage.getItem("id");

  const toggleSheet = () => {
    setOpen(!open);
    setShowFullCalendar(false);
  };

  const toggleFullCalendar = () => {
    setShowFullCalendar(!showFullCalendar);
  };

  const onChange = (value) => {
    setSelectedDate(value);
  };

  const handleDateClick = (value) => {
    setSelectedDate(value);
    setShowBottomSheet(true);
  };

  const renderDay = (locale, date) => {
    return (
      <div className={styles.calendarDay} onClick={() => handleDateClick(date)}>
        <div className={styles.calendarDayNumber}>{date.toLocaleString("en", { day: "numeric" })}</div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    );
  };

  useEffect(() => {
    if (selectedDate)
      fetchBottomSheetData(selectedDate);
  }, [selectedDate]);

  const fetchBottomSheetData = (selectedDate) => {
    const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;

    axios.get(`${config.baseUrl}/transactions/${userId}/date?date=${formattedDate}`)
      .then(response => {
        setBottomSheetData(response.data);
      })
      .catch(error => {
        console.error('Error fetching bottom sheet data:', error);
      });
  }

  return (
    <div className={`${styles.topSheet} ${open ? styles.open : ''}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p>수입,지출기록</p>
        </div>

        <div className={`${styles.calendarContainer} ${open ? styles.calendarContainerOpen : ''} ${showFullCalendar ? styles.calendarContainerShowFull : ''}`}>
          <div>
            <Calendar
              className={calendarStyles.reactCalendar}
              onChange={onChange}
              value={selectedDate}
              formatDay={(locale, date) => renderDay(locale, date)}
              calendarType="gregory"
              formatMonthYear={(locale, date) => {
                return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}`;
              }}
            />
          </div>
        </div>

        <div className={styles.arrowButton} onClick={toggleSheet}>
          {open ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
        </div>
      </div>
      <BottomSheet isOpen={showBottomSheet} onClose={() => setShowBottomSheet(false)}>
        {bottomSheetData && bottomSheetData.length > 0 ? (
          bottomSheetData.map((transaction, index) => (
            <MoneyHistoryAttribute
              key={index}
              price={transaction.amount}
              description={transaction.description}
              type={transaction.type}
              category={transaction.category}
            />
          ))
        ) : (
          <p>선택된 날짜에 데이터가 없습니다.</p>
        )}
      </BottomSheet>
    </div>
  );
};

export default TopSheet;
