import React, { useEffect } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import {Link} from"react-router-dom";

import "../../css/comm/index.css"
import styles from "../../css/quest/progressbar.module.css"

const Progressbar = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['background']}>
                <CircularProgressbarWithChildren
                    value={0.1}
                    strokeWidth={11}
                    className={styles['main']}
                    styles={
                        {
                            root: { height: "32.25vh" },
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
                    <div className={styles['starter']}></div>
                    <Link to="/quest/select">
                        <div className={styles['icon']}>?</div>
                    </Link>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
};

export default Progressbar;