import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../../../css/plan/plan-btn/plan-list.css';
import { FaTrashAlt } from "react-icons/fa";
import { AiFillPlusCircle, AiOutlineCheckCircle } from "react-icons/ai";
import PlanListBottomBar from "./plan-list-bottom-bar";
import PlanTrash from "./plan-trash";

const PlanList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const inputValue = location.state?.inputValue;
    const selectedImage = location.state?.selectedImage;

    const [clickedButtons, setClickedButtons] = useState([]); // 클릭된 버튼 인덱스 배열로 변경
    const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 열림 상태 추가
    const [modalButtonTexts, setModalButtonTexts] = useState([]); // 모달 버튼 텍스트 배열 상태 추가

    const images = {
        food: `${process.env.PUBLIC_URL}/img/job-plan/category-button/category-food-white.svg`,
        car: `${process.env.PUBLIC_URL}/img/job-plan/category-button/category-car-white.svg`,
        music: `${process.env.PUBLIC_URL}/img/job-plan/category-button/category-music-white.svg`,
        money: `${process.env.PUBLIC_URL}/img/job-plan/category-button/category-money-white.svg`,
        etc: `${process.env.PUBLIC_URL}/img/job-plan/category-button/category-etc-white.svg`
    };

    const selectedImageName = selectedImage ? Object.keys(selectedImage).find(key => selectedImage[key]) : null;
    const selectedImagePath = selectedImageName ? images[selectedImageName] : null;

    const handleNextButtonClick = () => {
        navigate('/plan/plan-categroy');
    };

    const handleButtonClick = (index, buttonText) => {
        
        const isClicked = clickedButtons.includes(index);
    
        
        if (isClicked) {
            setClickedButtons(clickedButtons.filter(item => item !== index));
            setModalButtonTexts(buttons => buttons.filter(button => button !== buttonText));
        } 
        
        else {
            setClickedButtons([...clickedButtons, index]);
            setModalButtonTexts(buttons => [...buttons, buttonText]);
        }
    };

    const handleComplete = () => {
        
        document.querySelectorAll('.combined-button.clicked').forEach(button => {
            button.classList.add('completed');
            button.disabled = true;
        });
       
        setClickedButtons([]);
        setModalIsOpen(false); 
        setModalButtonTexts([]); 
    };

    const handleCancel = () => {
        
        setClickedButtons([]);
        setModalIsOpen(false); 
        setModalButtonTexts([]); 
    };

    return (
        <>
            <div className="plan-list-name">
                내 계획을 확인해보세요!
                <div className="trash-icon" onClick={() => setModalIsOpen(true)}><FaTrashAlt color="grey" /></div>
            </div>
            <div className="plan-list-item">
                 {/* 예시 데이터 */}
                <button
                    key={0}
                    className={`combined-button ${clickedButtons.includes(0) ? 'clicked' : ''}`}
                    onClick={() => handleButtonClick(0, "군것질 한 번만 하기")}
                >
                    군것질 한 번만 하기
                    <AiOutlineCheckCircle className="check-icon" size={30} />
                </button>
                <button
                    key={1}
                    className={`combined-button ${clickedButtons.includes(1) ? 'clicked' : ''}`}
                    onClick={() => handleButtonClick(1, "등등,,")}
                >
                    등등,,
                    <AiOutlineCheckCircle className="check-icon" size={30} />
                </button>
            </div>
            {clickedButtons.length > 0 && <PlanListBottomBar handleComplete={handleComplete} handleCancel={handleCancel} />}
            <div className="plan-list-plus">
                <AiFillPlusCircle size={50} onClick={handleNextButtonClick} />
            </div>
            <PlanTrash modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} buttonTexts={modalButtonTexts} />
        </>
    );
}

export default PlanList;
