import React from "react";

import "../../css/comm/index.css"
import "../../css/income-expend/input-data.css"

const InputData = () => {
    return (
        <>
            <div className="input-data-container">
                <div className="input-data-box">
                    <p className="input-data-text">금액</p>
                    <input type="text" className="input-data-textbox" />
                </div>
                <div className="input-data-box">
                    <p className="input-data-text">분류</p>
                    <input type="text" className="input-data-textbox" />
                </div>
                <div className="input-data-box">
                    <p className="input-data-text">내용</p>
                    <input type="text" className="input-data-textbox" />
                </div>
            </div>
            <div className="input-data-done">
                <button className="input-data-done-btn">확인</button>
            </div>
        </>
    )
}


export default InputData;