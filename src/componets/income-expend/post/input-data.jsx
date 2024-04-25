import React, { useState } from "react";
import Dropdown from "./dropdown"
import { Icon } from "@iconify/react";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/input-data.module.css"

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
            <div className={styles['container']}>
                <div className={styles['box']}>
                    <p className={styles['text']}>금액</p>
                    <input type="text" className={styles['textbox']}/>
                </div>
                <div className={styles['box']}>
                    <p className={styles['text']}>분류</p>
                    {!isExpand && (
                        <button className={styles['selectbox']} onClick={articleBtnExpandHandler}>
                            <img src={`${process.env.PUBLIC_URL}/img/income-expend/${selectedImageURL}`} />
                            <p>{selectedCategory}</p>
                            <Icon icon="uiw:down" className={styles['icon']}></Icon>
                        </button>
                    )}
                    {isExpand && (
                        <Dropdown handleCategorySelection={handleCategorySelection} />
                    )}
                </div>
                <div className={styles['box']}>
                    <p className={styles['text']}>내용</p>
                    <input type="text" className={styles['textbox']}/>
                </div>
            </div>
            <div className={styles['done']}>
                <button className={styles['done-btn']}>확인</button>
            </div>
        </>
    )
}


export default InputData;