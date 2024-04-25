import React, { useState } from "react";
import QuestSelectBtn from "./quest-select-btn";

import "../../css/comm/index.css"
import "../../css/quest/quest-select.css";
const QuestSelect = () => {
    const [selectedBtn, setSelectedBtn] = useState(null);

    const handleButtonClick = (btnText) => {
        setSelectedBtn(btnText);
    };
    
    return (
        <>
            <div className="quest-select-title">아이콘을 선택하세요</div>
            <QuestSelectBtn/>
        </>
    )
}

export default QuestSelect;