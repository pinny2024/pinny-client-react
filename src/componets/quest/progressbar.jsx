import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import {Link} from"react-router-dom";

import "../../css/comm/index.css"
import "../../css/quest/progressbar.css"

const Progressbar = () => {
    return (
        <div className="progressbar-container">
            <div className="progressbar-background">
                <CircularProgressbarWithChildren
                    value={30}
                    strokeWidth={11}
                    className={"progressbar-main"}
                    styles={{
                        root: { height: "258px" },
                        path: {
                            stroke: "#79AFEF",
                            strokeLinecap: "round",
                            transition: "stroke-dashoffset 0.5s ease 0s",
                        },
                        trail: {
                            stroke: "rgb(0,0,0,0.1)"
                        }
                    }}
                >
                    <div className="progressbar-start"></div>
                    <Link to="/quest/select">
                        <div className="progressbar-icon">?</div>
                    </Link>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
};

export default Progressbar;