import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/select-btn.module.css"

const SelectBtn = () => {
    const [clickIcon, setClickIcon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const path = window.location.pathname;
        switch (path) {
            case '/income/post': setClickIcon('income'); break;
            case '/expend/post': setClickIcon('expend'); break;
        }
    }, [navigate]);

    const handleIncomeClick = () => {
        navigate('/income/post');
    }
    const handleExpendClick = () => {
        navigate('/expend/post');
    }

    return (
        <div className={styles['container']}>
            <div className={styles['box']}>
                <div className={clickIcon === "expend" ? styles['expend-active'] : styles['expend']} onClick={handleExpendClick}>
                    <p className={styles['select-btn-text']}>지출</p>
                </div>
                <div className={clickIcon === "income" ? styles['income-active'] : styles['income']} onClick={handleIncomeClick}>
                    <div className={styles['select-btn-text']}>수입</div>
                </div>
            </div>
        </div>
    )
}

export default SelectBtn;