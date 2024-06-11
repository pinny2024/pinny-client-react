import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../utils/axiosInstance';
import '../../../css/plan/plan-btn/plan-list.css';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import PlanListBottomBar from './plan-list-bottom-bar';
import PlanTrash from './plan-trash';
import PlanButton from './plan-buton';

const PlanList = ({ context }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryNames, plan, category, image } = location.state || {};

  const [plans, setPlans] = useState([]);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalButtonTexts, setModalButtonTexts] = useState([]);
  const [isBottomBarVisible, setIsBottomBarVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (categoryNames && plan && category && image) {
      console.log('Received category names:', categoryNames);
      console.log('Received plan:', plan);
      console.log('Received category:', category);
      console.log('Received image:', image);
    }
    fetchPlans();
  }, [categoryNames, plan, category, image]);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('/plans');
      const plansWithImages = response.data
        .filter(plan => plan.plan !== null && plan.plan.trim() !== '') // 빈 값을 가진 계획 제외
        .map(plan => {
          return {
            ...plan,
          };
        });
      setPlans(plansWithImages);
      console.log('Fetched plans:', plansWithImages);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  const handleNextButtonClick = () => {
    navigate('/plan/plan-categroy');
  };

  const handleButtonClick = (index, plan) => {
    if (context === 'modify') {
      navigate(`/plan/edit-plan-input/${plan.planId}`);
      fetchPlans();
    } else {
      const isClicked = clickedButtons.includes(index);

      if (isClicked) {
        setClickedButtons(clickedButtons.filter((item) => item !== index));
        setModalButtonTexts((buttons) => buttons.filter((button) => button !== plan.plan));
      } else {
        setClickedButtons([...clickedButtons, index]);
        setModalButtonTexts((buttons) => [...buttons, plan.plan]);
      }
      setIsBottomBarVisible(true);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleComplete = () => {
    // Complete logic here
  };

  const handleCancel = () => {
    setClickedButtons([]);
    setModalIsOpen(false);
    setModalButtonTexts([]);
  };

  const handleTrashClick = () => {
    setModalIsOpen(true);
  };

  const deletePlans = async () => {
    try {
      for (const index of clickedButtons) {
        const plan = plans[index];
        if (plan) {
          await axios.delete(`/plans/${plan.planId}`);
          setClickedButtons(prevButtons => prevButtons.filter(item => item !== index));
        }
      }
      setModalIsOpen(false);
      fetchPlans();
    } catch (error) {
      console.error('Error deleting plans:', error);
    }
  };

  return (
    <>
      <div className="plan-list-name">
        내 계획을 확인해보세요!
        <div className="trash-icon" onClick={handleTrashClick}>
          <FaTrashAlt color="grey" />
        </div>
      </div>
      <div className="plan-list-item">
        {plans.map((plan, index) => (
          <PlanButton
            key={index}
            index={index}
            plan={plan}
            isChecked={clickedButtons.includes(index)}
            context={context}
            image={plan.image}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
      {isBottomBarVisible && clickedButtons.length > 0 && (
        <PlanListBottomBar handleComplete={handleComplete} handleCancel={handleCancel} />
      )}
      <div className="plan-list-plus">
        <AiFillPlusCircle
          size={50}
          onClick={handleNextButtonClick}
          className={context === 'modify' ? 'mint' : 'grey'}
        />
      </div>
      <PlanTrash
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        buttonTexts={modalButtonTexts}
        deletePlans={deletePlans}
        clickedButtons={clickedButtons}
        planName={clickedButtons.length > 0 && plans.length > 0 ? plans[clickedButtons[0]].plan : ''}
      />
    </>
  );
};

export default PlanList;
