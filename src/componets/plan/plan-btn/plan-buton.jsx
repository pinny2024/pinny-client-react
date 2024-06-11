import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import '../../../css/plan/week-plan-statistics-button.css'; 
import '../../../css/plan/plan-btn/plan-list.css'; 

const PlanButton = ({ index, plan, isChecked, context, categoryName, category, image, handleButtonClick, buttonStyle }) => {
    const handleClick = () => {
        console.log('Category:', plan);
        handleButtonClick(index, plan);
    };

    return (
        <button
            className={`combined-button ${isChecked ? 'checked' : ''} ${context === 'modify' ? 'modify' : ''} ${buttonStyle}`}
            onClick={handleClick}
        >
            <img src={plan.image} alt={categoryName} className="button-image" /> 
            <div>{plan.plan}</div>
            <AiOutlineCheckCircle className="check-icon" size={30} />
        </button>
    );
};

export default PlanButton;
