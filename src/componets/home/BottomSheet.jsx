import React, { useState } from 'react';
import '../../css/home/BottomSheet.css'; // BottomSheet 컴포넌트의 CSS 파일 import
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const BottomSheet = ({ isOpen, onClose, children }) => {
  const bottomBarHeight = 60; // BottomBar의 높이를 여기서 설정하세요.
  const [startY, setStartY] = useState(null); // 터치 또는 마우스 클릭 시작 지점의 Y 좌표
  const [isDragging, setIsDragging] = useState(false); // 드래그 중 여부

  // 터치 또는 마우스 클릭 시작 지점을 기록합니다.
  const handleStart = (clientY) => {
    setStartY(clientY);
  };

  // 터치 또는 마우스 이동 시 스크롤을 조절합니다.
  const handleMove = (clientY) => {
    if (!isDragging) return;

    const deltaY = clientY - startY;
    window.scrollBy(0, -deltaY); // 스크롤 조절
    setStartY(clientY); // 터치 또는 마우스 이동한 지점을 새로운 시작점으로 설정
  };

  // 터치 또는 마우스 이벤트 종료 시 드래그 중 여부를 초기화합니다.
  const handleEnd = () => {
    setIsDragging(false);
  };

  // BottomSheet의 위치를 계산합니다.
  const bottomSheetPosition = () => {
    if (isOpen) {
      const windowHeight = window.innerHeight;
      const bottomSheetHeight = windowHeight - bottomBarHeight - 100; // BottomSheet의 높이 조절
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
