import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../componets/comm/header";
import InputData from "../../componets/quest/input-data";

const QuestInput = () => {
    const location = useLocation();
    console.log(location);
    return(
        <>
            <Header text = "목표 만들기"/>
            <InputData/>
        </>
    )
}

export default QuestInput;