// TopPlanCategory.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../../css/plan/plan-btn/top-plan-category.css';

const TopPlanCategory = () => {
    const navigate = useNavigate();

    const [clickedButtons, setClickedButtons] = useState({
        food: false,
        car: false,
        music: false,
        money: false,
        etc: false
    });

    const handleButtonClick = (category) => {
        setClickedButtons({
            ...clickedButtons,
            [category]: true
        });
    };

    const anyButtonClicked = Object.values(clickedButtons).some(buttonClicked => buttonClicked);

    const handleNextButtonClick = () => {
        navigate('/plan/plan-detail', { state: { clickedButtons } });
    };

    return (
        <div className="top-plan-category">
            <div className="plan-category-name">
                카테고리를 선택해주세요
            </div>
            <div className="plan-category-button">
                <button className={clickedButtons.food ? "category-button clicked" : "category-button"} onClick={() => handleButtonClick('food')}>
                    <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-food-white.svg`} alt="음식" />
                </button>
                <button className={clickedButtons.car ? "category-button clicked" : "category-button"} onClick={() => handleButtonClick('car')}>
                    <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-car-white.svg`} alt="차" />
                </button>
                <button className={clickedButtons.music ? "category-button clicked" : "category-button"} onClick={() => handleButtonClick('music')}>
                    <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-music-white.svg`} alt="음악" />
                </button>
                <button className={clickedButtons.money ? "category-button clicked" : "category-button"} onClick={() => handleButtonClick('money')}>
                    <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-money-white.svg`} alt="돈" />
                </button>
                <button className={clickedButtons.etc ? "category-button clicked" : "category-button"} onClick={() => handleButtonClick('etc')}>
                    <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-etc-white.svg`} alt="기타" />
                </button>
            </div>
            <div className="plan-category-next-button">
                <button className={anyButtonClicked ? "mint-button" : "grey-button"} onClick={handleNextButtonClick}>다음</button>
            </div>
        </div>
    );
};
export default TopPlanCategory;
