import React, { useState } from 'react';
import '../../css/home/BottomSheet.css'; 
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
    <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}
         onTouchStart={(e) => handleStart(e.touches[0].clientY)}
         onTouchMove={(e) => handleMove(e.touches[0].clientY)}
         onTouchEnd={handleEnd}
         onMouseDown={(e) => handleStart(e.clientY)}
         onMouseMove={(e) => handleMove(e.clientY)}
         onMouseUp={handleEnd}
         style={{ bottom: bottomSheetPosition() }}>
      <div className="sheet-content">
        {/* BottomSheet 내부에 있는 컨텐츠 */}
        {children}
      </div>
      <div className="drag-handle" onMouseDown={() => setIsDragging(true)}></div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default BottomSheet;
