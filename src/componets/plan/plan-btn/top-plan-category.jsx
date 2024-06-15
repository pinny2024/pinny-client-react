import React from "react";
import '../../../css/plan/plan-btn/top-plan-category.css';
import categories from './categories';

const TopPlanCategory = ({ handleButtonClick, clickedButtons }) => {
    return (
        <div className="top-plan-category">
            <div className="plan-category-button">
                {categories.map(category => (
                    <button
                        key={category.name}
                        className={`category-button ${clickedButtons[category.name] ? 'clicked' : ''}`}
                        onClick={() => handleButtonClick(category.name, category.image)}
                    >
                        <img
                            className="button-image"
                            src={`${process.env.PUBLIC_URL}${category.image}`}
                            alt={category.alt}
                        />
                    </button>
                ))} 
            </div>
        </div>
    );
};

export default TopPlanCategory;
