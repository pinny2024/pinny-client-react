import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import styles from "../../../css/income-expend/post-btn.module.css";


const PostBtn = () => {
    return (
        <Link to="/expend/post">
            <div className={styles['post-btn']}>
                <Icon className={styles['pencil-icon']} icon="mingcute:pencil-fill" />
            </div>
        </Link>
    )
}

export default PostBtn;