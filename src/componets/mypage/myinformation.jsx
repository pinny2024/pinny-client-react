import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import '../../css/mypage/myinformation.css';

const MyInformation = () => {
  const navigate = useNavigate();
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <>
      <div className="my-information-container">
        <hr />
        <button
          className="my-information-button"
          onClick={() => handleNavigation('/mypage/myinformation/nickname-edit')}
        >
          닉네임 수정 <BsChevronRight size={20} />
        </button>
        <hr />
        <button
          className="my-information-button"
          onClick={() => handleNavigation('')}
        >
          이메일 수정 <BsChevronRight size={20} />
        </button>
        <hr />
        <button
          className="my-information-button"
          onClick={() => handleNavigation('')}
        >
          비밀번호 수정 <BsChevronRight size={20} />
        </button>
        <hr />
        <div className="my-information-div">
          <div className="my-information-name">내 소비패턴 공유</div>
          <div className={`my-information-toggle ${isToggleOn ? 'on' : ''}`} onClick={handleToggle}>
             <span className="my-information-toggle-text" style={{ marginLeft: isToggleOn ? '-20px' : '20px' }}>{isToggleOn ? "끄기" : "켜기"}</span>
          </div>
        </div>
        <hr />
        {isToggleOn && (
          <div>
            {/* 여기에 내용을 추가하세요 */}
          </div>
        )}
      </div>
    </>
  );
};

export default MyInformation;
