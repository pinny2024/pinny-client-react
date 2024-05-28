import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../comm/header";
import TopPlanCategory from "./top-plan-category";
// import '../../../css/plan/plan-btn/top-plan-category.css';
import '../../../css/plan/plan-btn/edit-plan-input.css';

const EditPlanInput = () => {
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

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState(""); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    };

    const handleNextButtonClick = () => {
        navigate('/plan/plan-change-detail', { state: { inputValue } });
    };


    return (
        <>
            <Header />
            <div className="edit-plan-input-container">
           
                <TopPlanCategory clickedButtons={clickedButtons} handleButtonClick={handleButtonClick} />
                
                
            </div>
            <div className="edit-plan-input-box">
                계획
                <input
                    type="text" 
                    placeholder="편의점에서 3000원 이상 사지 않기"
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className="edit-plan-input-check">
                <button className={inputValue ? "mint-button" : "grey-button"} onClick={handleNextButtonClick}>확인</button>
            </div>
            
        </>
    )
}

export default EditPlanInput;
