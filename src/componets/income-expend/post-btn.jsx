import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import "../../css/income-expend/post-btn.css";


const PostBtn = () => {
    return (
        <Link to="/income-expend/post">
            <div className="post-btn">
                <Icon className="pencil-icon" icon="mingcute:pencil-fill" />
            </div>
        </Link>
    )
}

export default PostBtn;