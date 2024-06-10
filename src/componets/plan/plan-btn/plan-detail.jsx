import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../css/plan/plan-btn/plan-detail.css';
import axios from '../../utils/axiosInstance';

const PlanDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCategories, category, image } = location.state;

  const [inputValue, setInputValue] = useState('');
  const categoryNames = selectedCategories.map(cat => cat.name);

  useEffect(() => {
    console.log('Selected categories:', selectedCategories);
    console.log('Image:', image); // 이미지 값 콘솔에 출력
  }, [selectedCategories, categoryNames, image]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextButtonClick = async () => {
    try {
      if (inputValue.trim() !== '') {
        await axios.post('/plans', {
          categories: selectedCategories,
          plan: inputValue,
        });
        navigate('/plan/plan-list', {
          state: {
            categoryNames,
            plan: inputValue, 
            image, 
          },
        });
      }
    } catch (error) {
      console.error('Error adding plan detail:', error);
    }
  };

  return (
    <div>
      <div className="top-detail">내용을 입력해주세요</div>
      <div className="detail-plan-box">
        계획
        <input
          type="text"
          placeholder="편의점에서 3000원 이상 사지 않기"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="plan-detail-check">
        <button
          className={inputValue.trim() !== '' ? 'mint-button' : 'grey-button'}
          onClick={handleNextButtonClick}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default PlanDetail;
