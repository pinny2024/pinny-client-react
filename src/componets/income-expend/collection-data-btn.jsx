import React from "react";

import "../../css/comm/index.css"
import "../../css/income-expend/collection-data-btn.css";

const CollectionDataBtn = (props) => {
    const { img, text } = props;

    return (
        <div className="collection-data-btn-container">
            <div className="collection-data-btn-box">
                <img src={`${process.env.PUBLIC_URL}/img/food-icon.svg`} className="collection-data-icon" />
            </div>
            <div className="collection-data-text">식비</div>
        </div>
    )
}

export default CollectionDataBtn;