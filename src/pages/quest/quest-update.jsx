import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../componets/comm/header";
import InputData from "../../componets/quest/input-data";

const QuestInput = () => {
    const [path, setPath] = useState('');
    const location = useLocation();
    return (
        <>
            <Header text="목표 수정하기" />
            <InputData title="내용을 입력해주세요" inputTitle="목표" btn="다음" />
        </>
    )
}

export default QuestInput;