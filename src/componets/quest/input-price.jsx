import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import config from "../../config"
import "../../css/comm/index.css";
import styles from "../../css/quest/input-data.module.css";

const InputPrice = (props) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        const data = {
            userId: parseInt(localStorage.getItem("id")),
            quest: localStorage.getItem("content"),
            price: parseInt(inputValue),
            questCategoryId: parseInt(localStorage.getItem("questId"))
        };

        axios.post(`${config.baseUrl}/quests`, data)
            .then(function (response) {
                console.log(response);
                localStorage.removeItem("unit");
                localStorage.removeItem("content");
                localStorage.removeItem("questId");
                navigate('/quest');
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    useEffect(() => {
        const inputBox = document.querySelector(`.${styles['input-btn']}`);
        if (inputValue) {
            inputBox.style.backgroundColor = '#5EDCC4';
        } else {
            inputBox.style.backgroundColor = '';
        }
    }, [inputValue]);

    return (
        <div className={styles['input-container']}>
            <div className={styles['title']}>{props.title}</div>
            <div className={styles['input-box']}>
                <div className={styles['input-title']}>{props.inputTitle}</div>
                <input
                    type="text"
                    className={styles['input']}
                    placeholder="500,000원"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles['input-btn']} onClick={handleButtonClick}>{props.btn}</div>
        </div>
    );
};

export default InputPrice;
