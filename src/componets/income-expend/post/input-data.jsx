import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./dropdown"
import { Icon } from "@iconify/react";
import axios from "axios";
import config from "../../../config";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/input-data.module.css"

const InputData = () => {
    const [isExpand, setIsExpand] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("식비");
    const [selectedImageURL, setSelectedImageURL] = useState("food-gray-icon.svg");
    const [amount, setAmount] = useState("");
    const [content, setContent] = useState("");
    const [path, setPath] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        switch(window.location.pathname){
            case '/income/post' : setPath('incomes');
            case '/expend/post' : setPath('expenditures');
        }
    }, [navigate]);

    const articleBtnExpandHandler = () => {
        setIsExpand(!isExpand);
    };

    const handleCategorySelection = (category, imageURL) => {
        setSelectedCategory(category);
        setSelectedImageURL(imageURL);
        setIsExpand(false);
    };

    const isFormComplete = amount !== "" && selectedCategory !== "" && content !== "";

    const handleSubmitClick = () => {
        const userId = localStorage.getItem("id");
        const data = {
            money: amount,
            category: selectedCategory,
            content: content
        };

        axios.post(`${config.baseUrl}/${path}/${userId}`, data)
        .then(function(response) {
            console.log(response);
            navigate("/income-expend/seperate");
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['box']}>
                    <p className={styles['text']}>금액</p>
                    <input
                        type="text"
                        className={styles['textbox']}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
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
                    <input type="text"
                        className={styles['textbox']}
                        value={content}
                        onChange={(e) => setContent(e.target.value)} />
                </div>
            </div>
            <div className={styles['done']}>
                <button
                    className={`${styles['done-btn']} ${isFormComplete ? styles['done-btn-active'] : ''}`}
                    onClick={handleSubmitClick}
                >
                    확인
                </button>
            </div>
        </>
    )
}


export default InputData;