import React from "react";

import "../../css/comm/index.css"
import "../../css/quest/background.css"


const BackgroundQuest = () => {
    return(
        <div className="background-container">
            <img src={`${process.env.PUBLIC_URL}/img/quest/background.svg`}/>
        </div>
    )
}

export default BackgroundQuest;