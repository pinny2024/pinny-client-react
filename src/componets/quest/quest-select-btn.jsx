import React from "react";

import "../../css/comm/index.css"
import "../../css/quest/quest-select-btn.css";

const QuestSelectBtn = (props) => {
    const { img, text } = props;
    return (
        <div className="quest-btn-container">
            <div className="quest-btn-box">
                <img src={`${process.env.PUBLIC_URL}/img/quest/${img}`} className="quest-btn-icon" />
            </div>
            <div className="quest-btn-text">{text}</div>
        </div>
    )
}

export default QuestSelectBtn;