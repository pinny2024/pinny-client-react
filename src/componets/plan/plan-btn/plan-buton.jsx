import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import '../../../css/plan/week-plan-statistics-button.css';

const PlanButton = ({ index, plan, isChecked, context, categoryName, category, image, handleButtonClick }) => {
    const handleClick = () => {
        console.log('Category:', plan);
        handleButtonClick(index, plan);
    };

    return (
        <button
            className={`combined-button ${isChecked ? 'checked' : ''} ${context === 'modify' ? 'modify' : ''}`}
            onClick={handleClick}
        >
            <img src={image} alt={categoryName} className="button-image" /> {/* Use the image prop */}
            <div>{plan.plan}</div>
            <AiOutlineCheckCircle className="check-icon" size={30} />
        </button>
    );
};

export default PlanButton;
