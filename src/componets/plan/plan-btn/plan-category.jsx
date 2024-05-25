import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopPlanCategory from "./top-plan-category";
import '../../../css/plan/plan-btn/top-plan-category.css';

const PlanCategory = () => {
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
        <>
            <div className="plan-category">
                <div className="plan-category-name">
                    카테고리를 선택해주세요
                </div>
                <TopPlanCategory handleButtonClick={handleButtonClick} clickedButtons={clickedButtons} />
                <div className="plan-category-next-button">
                    <button className={anyButtonClicked ? "mint-button" : "grey-button"} onClick={handleNextButtonClick}>다음</button>
                </div>
            </div>
        </>
    );
};

export default PlanCategory;
