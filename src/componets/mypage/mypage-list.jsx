// src/components/mypage/MypageList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import '../../css/mypage/mypage-list.css';

const MypageList = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div id="mypage-list">
      <button 
        className="mypage-myinformation"
        onClick={() => handleNavigation('/mypage/myinformation')}
      >
        내 정보 <BsChevronRight size={20} />
      </button>
      <button 
        className="mypage-mybadge"
        onClick={() => handleNavigation('/mypage/mybadge')}
      >
        내 뱃지 <BsChevronRight size={20} />
      </button>
      <button 
        className="mypage-logout"
        onClick={() => handleNavigation('/mypage/logout')}
      >
        로그아웃 <BsChevronRight size={20} />
      </button>
    </div>
  );
};

export default MypageList;
