import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import '../../../css/plan/week-plan-statistics-button.css'; 
import '../../../css/plan/plan-btn/plan-list.css'; 

const PlanButton = ({ index, plan, isChecked, context, categoryName, category, image, handleButtonClick, buttonStyle }) => {
    const handleClick = () => {
        console.log('Category:', plan);
        handleButtonClick(index, plan);
    };

    // console.log(isChecked)
    return (
        <button
            className={`combined-button ${isChecked ? 'checked' : ''} ${context === 'modify' ? 'modify' : ''} ${buttonStyle}`}
            onClick={handleClick}
        >
            <img src={plan.image} alt={categoryName} className="category-button-image" /> 
            <div className='plan-button-text'>{plan.plan}</div>
            <AiOutlineCheckCircle className={`check-icon ${isChecked ? 'checked' : ''}`} size={30} />
        </button>
    );
};

export default PlanButton;
