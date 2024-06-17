import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import '../../../css/plan/week-plan-statistics-button.css'; 
import '../../../css/plan/plan-btn/plan-list.css'; 

const PlanButton = ({ index, plan, isChecked, context, categoryName, category, image, handleButtonClick, buttonStyle, hideCheckButton }) => {
    const handleClick = () => {
        console.log('Category:', plan);
        handleButtonClick(index, plan);
    };

    return (
        <button
            className={`combined-button ${isChecked ? 'checked' : ''} ${context === 'modify' ? 'modify' : ''} ${buttonStyle}`}
            onClick={handleClick}
        >
            <img src={plan.image} alt={categoryName} className="category-button-image" /> 
            <div className='plan-button-text'>{plan.plan}</div>
            {!hideCheckButton && context !== 'statistics' && (
                <AiOutlineCheckCircle className={`check-icon ${isChecked ? 'checked' : ''}`} size={30} />
            )}
            {context === 'statistics' && (
                <div className="check-count">{plan.checkNum || 0} / 7</div>
            )}
        </button>
    );
};

export default PlanButton;
