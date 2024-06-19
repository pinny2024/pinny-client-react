import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from '../../utils/axiosInstance';
import Header from "../Header";
import TopPlanCategory from "./top-plan-category";
import styles from '../../../css/plan/plan-btn/edit-plan-input.module.css'; 

const EditPlanInput = () => {
    const navigate = useNavigate();
    const { id: planId } = useParams(); 
    const userId = localStorage.getItem('id');

    const [inputValue, setInputValue] = useState(""); 
    const [clickedButton, setClickedButton] = useState("");
    const [planImage, setPlanImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [initialIsChecked, setInitialIsChecked] = useState(false);

    useEffect(() => {
        const fetchPlanDetails = async () => {
            try {
                const response = await axios.get(`/plans/${userId}/${planId}`);
                const { plan, image, categories, isChecked } = response.data;

                console.log(response.data);

                setInputValue(plan || "");  
                setPlanImage(image || ""); 
                setPreviewImage(image || ""); 
                setInitialIsChecked(isChecked);

                if (categories && categories.length > 0) {
                    setClickedButton(categories[0]);
                }
            } catch (error) {
                console.error('Error fetching plan details:', error);
            }
        };

        fetchPlanDetails();
    }, [planId, userId]);

    const handleButtonClick = (category, image) => {
        setClickedButton(category);
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
            const data = {
                plan: inputValue,
                image: planImage,
                categories: [clickedButton],
                isChecked: initialIsChecked,
                checkNum: 0 
            };

            console.log(data);
    
            await axios.put(`/plans/${planId}`, data);
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
                    clickedButtons={{ [clickedButton]: true }} 
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
                    className={styles.inputBox}
                />
            </div>
            <div className={styles.editPlanInputCheck}>
                <button className={inputValue ? styles.mintButton : styles.greyButton} onClick={handleNextButtonClick}>확인</button>
            </div>
        </>
    );
};

export default EditPlanInput;
