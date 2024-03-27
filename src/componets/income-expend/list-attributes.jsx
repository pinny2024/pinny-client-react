import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/comm/index.css";
import "../../css/income-expend/list-attributes.css";

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
    const handleCollectionClick = () =>{
        navigate('/income-expend/collection');
    }

    return (
        <div className="list-top">
            <div onClick={handleSeperateClick} className={clickIcon === 'seperate' ? 'list-top-item1-active' : 'list-top-item1'}>
                <p className={clickIcon === 'seperate' ? 'center-active' : 'center'}>따로보기</p>
            </div>
            <div onClick={handleCollectionClick} className={clickIcon === 'collection' ? 'list-top-item2-active' : 'list-top-item2'}>
                <p className={clickIcon === 'collection' ? 'center-active' : 'center'}>모아보기</p>
            </div>
        </div>
    );
};

export default ListAttributes;
