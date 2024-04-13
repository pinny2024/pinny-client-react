import React from "react";
import '../../../css/plan/plan-btn/top-plan-category.css';

const TopPlanCategory = ()=>{
    return(
        <div className="top-plan-category">
            <div className="plan-category-name"> 
                카테고리를 선택해주세요
            </div>
            <div className="plan-category-button">
                <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-food-white.svg`} />
                <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-car-white.svg`} />
                <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-music-white.svg`} />
                <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-money-white.svg`} />
                <img className="button-image" src={`${process.env.PUBLIC_URL}/img/job-plan/category-button/category-etc-white.svg`} />
            </div>
            <div className="plan-category-next-button">
                <button>다음</button>
            </div>
        </div>
        
    )
}
export default TopPlanCategory;