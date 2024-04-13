import React from "react";

import "../../css/comm/index.css"
import "../../css/quest/background.css";

const BackgroundQuest = (props) => {
    const {title, subtitle} = props;
    return(
        <div className="background-container">
            <p className="title">목표를 만들어주세요!</p>
            <p className="subtitle">내가 이룰 목표를 만들어볼까요?</p>
        </div>
    );
};

export default BackgroundQuest;