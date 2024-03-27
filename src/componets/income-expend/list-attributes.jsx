import React, { useState, useEffect } from "react";
import "../../css/comm/index.css"
import "../../css/income-expend/list-attributes.css"
import {useIncomeExpend} from "react-router-dom";

const ListAttributes = () => {
    const [clickList, setClickList] = useState(null);

    useEffect(()=>{
        switch(window.location.pathname){
            case '/separate': setClickList('separete'); break;
            case '/collection' : setClickList('collection'); break;
        }
    }, [useIncomeExpend]);

    const handleSeperateClick = () => {
        useIncomeExpend('/seperate');
    }

    const handleCollectionClick = () => {
        useIncomeExpend('/collection')
    }

    return (
        <div className="list-top">
        <div className="list-top-item1"><p className="center">따로보기</p></div>
        <div className="list-top-item2"><p className="center">모아보기</p></div>
    </div>
    )
}

export default ListAttributes;