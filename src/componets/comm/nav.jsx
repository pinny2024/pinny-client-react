import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import "../../css/comm/index.css"
import "../../css/comm/nav.css"

const Nav = () => {
    const [clickIcon, setClickIcon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        switch (window.location.pathname) {
            case '/home': setClickIcon('home'); break;
            case '/income-expend': setClickIcon('income-expend'); break;
            case '/plan': setClickIcon('plan'); break;
            case '/quest': setClickIcon('quest'); break;
            case '/mypage': setClickIcon('mypage'); break;
        }
    }, [navigate]);

    const handleHomeClick = () => {
        navigate('/home');
    }
    const handleIncomeExpendClick = () => {
        navigate('/income-expend');
    }
    const handlePlanClick = () => {
        navigate('/plan');
    }
    const handleQuestClick = () => {
        navigate('/quest');
    }
    const handleMypageClick = () => {
        navigate('/mypage');
    }

    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li className="nav-item" onClick={handleHomeClick}>
                    <Icon className="nav-icon" icon="ant-design:home-filled" color={clickIcon === 'home' ? '#38D6B8' : ''}/>
                    <div className={clickIcon === 'home' ? 'nav-label-active' : 'nav-label'}>홈</div>
                </li>
                <li className="nav-item" onClick={handleIncomeExpendClick}>
                    <Icon className="nav-icon" icon="fa-solid:coins" color={clickIcon === 'income-expend' ? '#38D6B8' : ''}/>
                    <div className={clickIcon === 'income-expend' ? 'nav-label-active' : 'nav-label'}>수입/지출</div>
                </li>
                <li className="nav-item" onClick={handlePlanClick}>
                    <Icon className="nav-icon" icon="jam:write-f" color={clickIcon === 'plan' ? '#38D6B8' : ''}/>
                    <div className={clickIcon === 'plan' ? 'nav-label-active' : 'nav-label'}>계획</div>
                </li>
                <li className="nav-item" onClick={handleQuestClick}>
                    <img className="nav-icon" src={clickIcon === 'quest' ? "img/challenge-color.svg" : "img/challenge.svg"}></img>
                    <div className={clickIcon === 'quest' ? 'nav-label-active' : 'nav-label'}>퀘스트</div>
                </li>
                <li className="nav-item" onClick={handleMypageClick}>
                    <Icon className="nav-icon" icon="ph:user-fill" color={clickIcon === 'mypage' ? '#38D6B8' : ''} />
                    <div className={clickIcon === 'mypage' ? 'nav-label-active' : 'nav-label'}>마이페이지</div>
                </li>
            </ul>
        </div>
    )
}

export default Nav;