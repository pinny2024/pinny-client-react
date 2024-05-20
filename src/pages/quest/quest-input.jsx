import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../componets/comm/header";
import InputData from "../../componets/quest/input-data";

const QuestInput = () => {
    const [path, setPath] = useState('');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.endsWith("content"))
            setPath("content")
        else if (location.pathname.endsWith("price"))
            setPath("price");
    }, [location.pathname]);
    return (
        <>
            <Header text="목표 만들기" />
            {path === "content" && <InputData title="내용을 입력해주세요" inputTitle="목표" btn="다음" />}
            {path === "price" && <InputData title="가격을 입력해주세요" inputTitle="가격" btn="목표 만들기" />}
        </>
    )
}

export default QuestInput;