import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 1b4e09e9cc5bdf1b169a4a77306faf36ab0c9cff

import "../../css/comm/index.css"
import "../../css/income-expend/collection-data-btn.css";

const CollectionDataBtn = (props) => {
    const { img, text } = props;

    return (
<<<<<<< HEAD
        <div className="collection-data-btn-container">
            <div className="collection-data-btn-box">
                <img src={`${process.env.PUBLIC_URL}/img/income-expend/${img}`} className="collection-data-icon" />
            </div>
            <div className="collection-data-text">{text}</div>
        </div>
=======
        <Link to={{ pathname: "/collection", search: "?type=" + text }}>
            <div className="collection-data-btn-container">
                <div className="collection-data-btn-box">
                    <img src={`${process.env.PUBLIC_URL}/img/income-expend/${img}`} className="collection-data-icon" />
                </div>
                <div className="collection-data-text">{text}</div>
            </div>
        </Link>
>>>>>>> 1b4e09e9cc5bdf1b169a4a77306faf36ab0c9cff
    )
}

export default CollectionDataBtn;