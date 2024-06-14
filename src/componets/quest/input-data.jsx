import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../css/comm/index.css"
import styles from "../../css/quest/input-data.module.css"

const InputData = (props) => {
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [questId, setQuestId] = useState(1);
    const [inputValue, setInputValue] = useState('');

    const category = localStorage.getItem("unit");

    useEffect(() => {
            switch (category) {
                case '가방':
                    setContent('핸드백 사기');
                    setQuestId(1);
                    break;
                case '옷':
                    setContent('AA브랜드 옷 사기');
                    setQuestId(2);
                    break;
                case '악세사리':
                    setContent('목걸이 사기');
                    setQuestId(3);
                    break;
                case '전자기기':
                    setContent('노트북 사기');
                    setQuestId(4);
                    break;
                case '집':
                    setContent('원룸 얻기');
                    setQuestId(5);
                    break;
                case '여행':
                    setContent('미국 가기');
                    setQuestId(6);
                    break;
                case '차':
                    setContent('자가용 뽑기');
                    setQuestId(7);
                    break;
                case '문화생활':
                    setContent('콘서트 티켓 가기');
                    setQuestId(8);
                    break;
                case '기타':
                    setContent('기부하기');
                    setQuestId(9);
                    break;
                default: setContent('목표 설정');
        }
    }, []);

    useEffect(() => {
        const inputBox = document.querySelector(`.${styles['input-btn']}`);
        if (inputValue) {
            inputBox.style.backgroundColor = '#5EDCC4';
        }
    }, [inputValue]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        if (inputValue) {
                localStorage.setItem("content", inputValue);
                localStorage.setItem("questId", questId);
                navigate('/quest/input/price');
        }
    };

    return (
        <div className={styles['input-container']}>
            <div className={styles['title']}>{props.title}</div>
            <div className={styles['input-box']}>
                <div className={styles['input-title']}>{props.inputTitle}</div>
                <input
                    type="text"
                    className={styles['input']}
                    placeholder={`${content}`}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles['input-btn']} onClick={handleButtonClick}>  {props.btn}</div>
        </div>
    )
}

export default InputData;