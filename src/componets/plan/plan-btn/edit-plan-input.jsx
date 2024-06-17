import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "../../comm/header";
import TopPlanCategory from "./top-plan-category";
import styles from '../../../css/plan/plan-btn/edit-plan-input.module.css'; 

const EditPlanInput = () => {
    const navigate = useNavigate();
    const { id: planId } = useParams(); 
    const userId = localStorage.getItem('id');

    const [inputValue, setInputValue] = useState(""); 
    const [clickedButtons, setClickedButtons] = useState({
        food: false,
        car: false,
        music: false,
        money: false,
        etc: false 
    });
    const [planImage, setPlanImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [initialIsChecked, setInitialIsChecked] = useState(false);

    useEffect(() => {
        const fetchPlanDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/plans/${userId}/${planId}`);
                const { plan, image, categories, isChecked } = response.data;

                console.log(response.data);

                setInputValue(plan || "");  
                setPlanImage(image || ""); 
                setPreviewImage(image || ""); 
                setInitialIsChecked(isChecked);

                const updatedClickedButtons = { ...clickedButtons };
                (categories || []).forEach(category => {
                    updatedClickedButtons[category] = true;
                });
                setClickedButtons(updatedClickedButtons);
            } catch (error) {
                console.error('Error fetching plan details:', error);
            }
        };

        fetchPlanDetails();
    }, [planId]);

    const handleButtonClick = (category, image) => {
        setClickedButtons(prevState => ({
            ...prevState,
            [category]: !prevState[category] 
        }));
        handleImageChange(image);
    };

    const handleImageChange = (image) => {
        setPlanImage(image);
        setPreviewImage(image);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    };

    const handleNextButtonClick = async () => {
        try {
            const selectedCategories = Object.keys(clickedButtons).filter(category => clickedButtons[category]);
            const data = {
                plan: inputValue,
                image: planImage,
                categories: selectedCategories,
                isChecked: initialIsChecked,
                checkNum: 0 
            };

            console.log(data)
    
            await axios.put(`http://localhost:8082/plans/${planId}`, data);
            navigate(`/plan/plan-change-detail`);
        } catch (error) {
            console.error('Error updating plan:', error);
        }
    };
    
    
    return (
        <>
            <Header />
            <div className={styles.editPlanInputContainer}>
                <TopPlanCategory 
                    clickedButtons={clickedButtons} 
                    handleButtonClick={handleButtonClick} 
                />
            </div>
            <div className={styles.editPlanInputBox}>
                계획
                <input
                    type="text" 
                    placeholder="편의점에서 3000원 이상 사지 않기"
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className={styles.editPlanInputCheck}>
                <button className={inputValue ? styles.mintButton : styles.greyButton} onClick={handleNextButtonClick}>확인</button>
            </div>
        </>
    );
};

export default EditPlanInput;
