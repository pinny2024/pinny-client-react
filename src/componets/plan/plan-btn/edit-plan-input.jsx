import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "../../comm/header";
import TopPlanCategory from "./top-plan-category";
import '../../../css/plan/plan-btn/edit-plan-input.css';

const EditPlanInput = ({ updatePlan }) => {
    const navigate = useNavigate();
    const { id: planId } = useParams(); // URL에서 계획의 ID를 가져옴

    const [inputValue, setInputValue] = useState(""); 
    const [clickedButtons, setClickedButtons] = useState({
        food: false,
        car: false,
        music: false,
        money: false,
        etc: false
    });
    const [planImage, setPlanImage] = useState("");

    useEffect(() => {
        const fetchPlanDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/plans/${planId}`);
                const { plan, image } = response.data;
                setInputValue(plan);
                setPlanImage(image);
            } catch (error) {
                console.error('Error fetching plan details:', error);
            }
        };

        fetchPlanDetails();
    }, [planId]);

    const handleButtonClick = (category) => {
        setClickedButtons(prevState => ({
            ...prevState,
            [category]: !prevState[category] // Toggle the button state
        }));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    };

    const handleNextButtonClick = async () => {
        try {
            await axios.put(`http://localhost:8082/plans/${planId}`, { plan: inputValue });
            navigate(`/plan/plan-change-detail`);
        } catch (error) {
            console.error('Error updating plan:', error);
        }
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
    );
};

export default EditPlanInput;
