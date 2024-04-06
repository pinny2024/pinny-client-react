import React from "react";
import { Link } from "react-router-dom";

import "../../css/comm/index.css"
import "../../css/income-expend/collection-data-btn.css";

const CollectionDataBtn = (props) => {
    const { img, text } = props;

    return (
        <Link to={{ pathname: "/collection", search: "?type=" + text }}>
            <div className="collection-data-btn-container">
                <div className="collection-data-btn-box">
                    <img src={`${process.env.PUBLIC_URL}/img/income-expend/${img}`} className="collection-data-icon" />
                </div>
                <div className="collection-data-text">{text}</div>
            </div>
        </Link>
    )
}

export default CollectionDataBtn;