import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import "../../css/comm/index.css"
import "../../css/comm/header.css"

const Header = (props) => {
    const {text} = props;
    const navigate = useNavigate();

    return(
        <div className="header-container">
            <Icon className="header-icon" icon="material-symbols-light:arrow-back-ios-rounded" onClick={()=>navigate(-1)}/>
            <div className="header-text">{text}</div>
            <div className="header-box"></div>
        </div>
    )
}

export default Header;