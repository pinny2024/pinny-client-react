import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import "../../css/comm/index.css"
import styles from "../../css/comm/header.module.css"

const Header = (props) => {
    const {text} = props;
    const navigate = useNavigate();

    return(
        <div className={styles['container']}>
            <Icon className={styles['icon']} icon="material-symbols-light:arrow-back-ios-rounded" onClick={()=>navigate("/plan")}/>
            <div className={styles['text']}>{text}</div>
            <div className={styles['box']}></div>
        </div>
    )
}

export default Header;