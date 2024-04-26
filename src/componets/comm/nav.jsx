import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import "../../css/comm/index.css"
import styles from "../../css/comm/nav.module.css"

const Nav = () => {
    const [clickIcon, setClickIcon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const path = window.location.pathname;
        switch (true) {
            case path.startsWith('/home'): setClickIcon('home'); break;
            case path.startsWith('/income-expend'): setClickIcon('income-expend'); break;
            case path.startsWith('/plan'): setClickIcon('plan'); break;
            case path.startsWith('/quest'): setClickIcon('quest'); break;
            case path.startsWith('/mypage'): setClickIcon('mypage'); break;
        }
    }, [navigate]);


    const handleHomeClick = () => {
        navigate('/home');
    }
    const handleIncomeExpendClick = () => {
        navigate('/income-expend/seperate');
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
        <div className={styles['container']}>
            <ul className={styles['list']}>
                <li className={styles['item']} onClick={handleHomeClick}>
                    <Icon className={styles['icon']} icon="ant-design:home-filled" color={clickIcon === 'home' ? '#38D6B8' : ''} />
                    <div className={`${styles['label']} ${clickIcon === 'home' ? styles['label-active'] : ''}`}>홈</div>
                </li>
                <li className={styles['item']} onClick={handleIncomeExpendClick}>
                    <Icon className={styles['icon']} icon="fa-solid:coins" color={clickIcon === 'income-expend' ? '#38D6B8' : ''} />
                    <div className={`${styles['label']} ${clickIcon === 'income-expend' ? styles['label-active'] : ''}`}>수입/지출</div>
                </li>
                <li className={styles['item']} onClick={handlePlanClick}>
                    <Icon className={styles['icon']} icon="jam:write-f" color={clickIcon === 'plan' ? '#38D6B8' : ''} />
                    <div className={`${styles['label']} ${clickIcon === 'plan' ? styles['label-active'] : ''}`}>계획</div>
                </li>
                <li className={styles['item']} onClick={handleQuestClick}>
                    <img className={styles['icon']} src={clickIcon === 'quest' ? `${process.env.PUBLIC_URL}/img/comm/challenge-color.svg` : `${process.env.PUBLIC_URL}/img/comm/challenge.svg`} alt="Quest" />
                    <div className={`${styles['label']} ${clickIcon === 'quest' ? styles['label-active'] : ''}`}>퀘스트</div>
                </li>
                <li className={styles['item']} onClick={handleMypageClick}>
                    <Icon className={styles['icon']} icon="ph:user-fill" color={clickIcon === 'mypage' ? '#38D6B8' : ''} />
                    <div className={`${styles['label']} ${clickIcon === 'mypage' ? styles['label-active'] : ''}`}>마이페이지</div>
                </li>
            </ul>
        </div>
    )
}

export default Nav;