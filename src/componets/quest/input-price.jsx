import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import config from "../../config"
import "../../css/comm/index.css";
import styles from "../../css/quest/input-data.module.css";

const InputPrice = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [inputValue, setInputValue] = useState('');
    const [path, setPath] = useState('');
    const [questId, setQuestId] = useState(null);
    const userId = localStorage.getItem("id");

    const handleInputChange = (e) => {
        const value = e.target.value;
        const cleanedValue = value.replace(/\D/g, '');
        const formattedValue = cleanedValue ? Number(cleanedValue).toLocaleString() : '';
        setInputValue(formattedValue);
    };

    useEffect(() => {
        if (location.pathname.endsWith("/update/price"))
            setPath("update")
        else
            setPath("input")
    })

    useEffect(() => {
        axios.get(`http://localhost:8082/${config.baseUrl}/quests/${userId}`)
        .then(function (response) {
            console.log(response)
            setQuestId(response.data[0].questId)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [userId])

    const handleButtonClick = () => {
        if (path === "input") {
            const data = {
                userId: parseInt(localStorage.getItem("id")),
                quest: localStorage.getItem("content"),
                price: parseInt(inputValue),
                questCategoryId: parseInt(localStorage.getItem("questId"))
            };    
            axios.post(`http://localhost:8082/${config.baseUrl}/quests`, data)
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
        }

        else{
            const data = {
                quest: localStorage.getItem("content"),
                price: parseInt(inputValue),
                questCategoryId: parseInt(localStorage.getItem("questId"))
            };  
            axios.put(`http://localhost:8082/${config.baseUrl}/quests/${questId}`, data)
            .then(response =>{
                console.log(response);
                localStorage.removeItem("unit");
                localStorage.removeItem("content");
                localStorage.removeItem("questId");
                navigate('/quest');
            })
            .catch(function (error) {
                console.log(error);
            })
        }
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
                    placeholder="500,000"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles['input-btn']} onClick={handleButtonClick}>{props.btn}</div>
        </div>
    );
};

export default InputPrice;
