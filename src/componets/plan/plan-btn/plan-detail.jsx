import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../css/plan/plan-btn/plan-detail.css';
import axios from '../../utils/axiosInstance';

const PlanDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCategories, image } = location.state || { selectedCategories: [], image: '' };
  const userId = localStorage.getItem("id");

  const [inputValue, setInputValue] = useState('');
  const categoryNames = selectedCategories.map(cat => cat.name);

  useEffect(() => {
    console.log('Selected categories:', selectedCategories);
    console.log('Image:', image); 
    
  }, [selectedCategories, image]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextButtonClick = async () => {
    try {
      if (inputValue.trim() !== '') {
        await axios.post('http://localhost:8082/plans', {
          plan: inputValue,
          image: image,
          userId: userId,
        });
        navigate('/plan/plan-list', {
          state: {
            categoryNames,
            plan: inputValue,
            image,
            userId: userId,
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
