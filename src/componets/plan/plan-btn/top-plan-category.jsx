import React from "react";
import '../../../css/plan/plan-btn/top-plan-category.css';

const TopPlanCategory = ({ handleButtonClick, clickedButtons }) => {
    return (
        <div className="top-plan-category">
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
        </div>
    );
};

export default TopPlanCategory;
