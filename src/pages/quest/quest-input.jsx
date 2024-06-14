import { React } from "react";
import Header from "../../componets/comm/header";
import InputData from "../../componets/quest/input-data";

const QuestInput = () => {
    return (
        <>
            <Header text="목표 만들기" />
            <InputData title="내용을 입력해주세요" inputTitle="목표" btn="다음" />
        </>
    )
}

export default QuestInput;