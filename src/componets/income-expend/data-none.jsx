import React from "react";
import "../../css/income-expend/data-none.css"

const DataNone = () => {
    return (
        <div className="data-none-container">
            <div className="coin-img">
                <img src={`${process.env.PUBLIC_URL}/img/coin.svg`} />
            </div>
            <div className="coin-text">
                <p>오늘의 <span style={{color : '#38D6B8'}}>수입,지출</span>을<br></br>입력해주세요!</p>
            </div>
        </div>

    )
}

export default DataNone;