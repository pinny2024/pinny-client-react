import React from "react";
import { Link } from "react-router-dom";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/collection-data-btn.module.css";

const CollectionDataBtn = (props) => {
    const { img, text } = props;

    return (
        <Link to={{ pathname: "/collection", search: "?type=" + text }}>
            <div className={styles['container']}>
                <div className={styles['box']}>
                    <img src={`${process.env.PUBLIC_URL}/img/income-expend/${img}`} className={styles['icon']} />
                </div>
                <div className={styles['text']}>{text}</div>
            </div>
        </Link>
    )
}

export default CollectionDataBtn;