import React from "react";
import QuestSelectBtn from "./quest-select-btn";

import "../../css/comm/index.css"
import "../../css/quest/quest-select.css";
const QuestSelect = () => {
    return (
        <>
            <div className="quest-select-title">아이콘을 선택하세요</div>
            <div className="quest-select-btn">
                <QuestSelectBtn img="bag-icon.svg" text="가방" />
                <QuestSelectBtn img="clothes-icon.svg" text="옷" />
                <QuestSelectBtn img="ring-icon.svg" text="악세사리" />
                <QuestSelectBtn img="laptop-icon.svg" text="전자기기" />
                <QuestSelectBtn img="airplane-icon.svg" text="여행" />
                <QuestSelectBtn img="house-icon.svg" text="집" />
                <QuestSelectBtn img="car-icon.svg" text="차" />
                <QuestSelectBtn img="ticket-icon.svg" text="문화생활" />
                <QuestSelectBtn img="etc-icon.svg" text="기타" />
            </div>
            <div className="quest-select-next">다음</div>
        </>
    )
}

export default QuestSelect;