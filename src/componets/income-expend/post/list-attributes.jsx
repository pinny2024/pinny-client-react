import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/comm/index.css";
import styles from "../../../css/income-expend/list-attributes.module.css";

const ListAttributes = () => {
    const [clickIcon, setClickIcon] = useState('seperate');
    const navigate = useNavigate();

    useEffect(() => {
        switch (window.location.pathname) {
            case '/income-expend/seperate': setClickIcon('seperate'); break;
            case '/income-expend/collection': setClickIcon('collection'); break;
        }
    }, [navigate]);

    const handleSeperateClick = () => {
        navigate('/income-expend/seperate');
    }
    const handleCollectionClick = () => {
        navigate('/income-expend/collection');
    }

    return (
        <div className={styles['top']}>
            <div onClick={handleSeperateClick} className={clickIcon === 'seperate' ? styles['item1-active'] : styles['item1']}>
                <p className={clickIcon === 'seperate' ? styles['center-active'] : styles['center']}>따로보기</p>
            </div>
            <div onClick={handleCollectionClick} className={clickIcon === 'collection' ? styles['item2-active'] : styles['item2']}>
                <p className={clickIcon === 'collection' ? styles['center-active'] : styles['center']}>모아보기</p>
            </div>
        </div>
    );
};

export default ListAttributes;
