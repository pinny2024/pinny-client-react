import React, { useState } from "react";
import Dropdown from "../../../componets/income-expend/post/dropdown"
import { Icon } from "@iconify/react";

import "../../../css/comm/index.css"
import "../../../css/income-expend/input-data.css"

const InputData = () => {
    const [isExpand, setIsExpand] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("식비");
    const [selectedImageURL, setSelectedImageURL] = useState("food-gray-icon.svg")

    const articleBtnExpandHandler = () => {
        setIsExpand(!isExpand);
    };

    const handleCategorySelection = (category, imageURL) => {
        setSelectedCategory(category);
        setSelectedImageURL(imageURL);
        setIsExpand(false);
    };

    return (
        <>
            <div className="input-data-container">
                <div className="input-data-box">
                    <p className="input-data-text">금액</p>
                    <input type="text" className="input-data-textbox" />
                </div>
                <div className="input-data-box">
                    <p className="input-data-text">분류</p>
                    {!isExpand && (
                        <button className="input-data-selectbox" onClick={articleBtnExpandHandler}>
                            <img src={`${process.env.PUBLIC_URL}/img/income-expend/${selectedImageURL}`} />
                            <p>{selectedCategory}</p>
                            <Icon icon="uiw:down" className="input-data-icon"></Icon>
                        </button>
                    )}
                    {isExpand && (
                        <Dropdown handleCategorySelection={handleCategorySelection} />
                    )}
                </div>
                <div className="input-data-box">
                    <p className="input-data-text">내용</p>
                    <input type="text" className="input-data-textbox" />
                </div>
            </div>
            <div className="input-data-done">
                <button className="input-data-done-btn">확인</button>
            </div>
        </>
    )
}


export default InputData;