import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/comm/index.css"
import "../../css/income-expend/select-btn.css"

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
        <div className="select-btn-container">
            <div className="select-btn-box">
                <div className={clickIcon == "expend" ? 'select-btn-expend-active' : 'select-btn-expend'} onClick={handleExpendClick}>
                    <p className="select-btn-text">지출</p>
                </div>
                <div className={clickIcon == "income" ? 'select-btn-income-active' : 'select-btn-income'} onClick={handleIncomeClick}>
                    <div className="select-btn-text">수입</div>
                </div>
            </div>
        </div>
    )
}

export default SelectBtn;