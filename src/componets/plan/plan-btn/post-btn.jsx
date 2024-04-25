import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import "../../../css/income-expend/post-btn.module.css";

const PostBtn = () => {
    return (
        <Link to="/plan/plan-categroy">
            <div className="post-btn">
                <Icon className="pencil-icon" icon="mingcute:pencil-fill" />
            </div>
        </Link>
    )
}

export default PostBtn;