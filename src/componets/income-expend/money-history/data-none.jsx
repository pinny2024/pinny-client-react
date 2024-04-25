import React from "react";
import "../../../css/comm/index.css"
import styles from"../../../css/income-expend/data-none.module.css"

const DataNone = () => {
    return (
        <div className={styles['container']}>
        <div>
                <img src={`${process.env.PUBLIC_URL}/img/income-expend/coin.svg`} />
            </div>
            <div className={styles['text']}>
                <p>오늘의 <span style={{color : '#38D6B8'}}>수입,지출</span>을<br></br>입력해주세요!</p>
            </div>
        </div>

    )
}

export default DataNone;