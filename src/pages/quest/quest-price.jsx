import { React } from "react";
import Header from "../../componets/comm/header";
import PriceData from "../../componets/quest/input-price";

const QuestPrice = () => {
    return (
        <>
            <Header text="목표 만들기" />
            <PriceData title="가격을 입력해주세요" inputTitle="가격" btn="목표 만들기" />
        </>
    )
}

export default QuestPrice;