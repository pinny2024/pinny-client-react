import React, { useState } from 'react';
import styles from '../../css/home/BottomSheet.module.css';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const BottomSheet = ({ isOpen, onClose, children }) => {
  const bottomBarHeight = 60;
  const [startY, setStartY] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = (clientY) => {
    setStartY(clientY);
  };

  const handleMove = (clientY) => {
    if (!isDragging) return;

    const deltaY = clientY - startY;
    window.scrollBy(0, -deltaY);
    setStartY(clientY);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const bottomSheetPosition = () => {
    if (isOpen) {
      const windowHeight = window.innerHeight;
      const bottomSheetHeight = windowHeight - bottomBarHeight - 100;
      return `calc(${bottomSheetHeight}px - 100%)`;
    } else {
      return '100%';
    }
  };

  return (
    <div className={`${styles.bottomSheet} ${isOpen ? styles.bottomSheetOpen : ''}`}
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchMove={(e) => handleMove(e.touches[0].clientY)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseMove={(e) => handleMove(e.clientY)}
      onMouseUp={handleEnd}
      style={{ bottom: bottomSheetPosition() }}>
      <div className={styles.top}>
        <div className={styles.dragHandle} onMouseDown={() => setIsDragging(true)}></div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
      <div className={styles.sheetContent}>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
