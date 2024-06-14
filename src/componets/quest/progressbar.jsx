import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/comm/index.css";
import styles from "../../css/quest/progressbar.module.css";
import axios from "axios";
import config from '../../config';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Progressbar = () => {
    const [questId, setQuestId] = useState(1);
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");
    const [price, setPrice] = useState("");
    const [percent, setPercent] = useState("");

    const userId = localStorage.getItem("id");

    useEffect(() => {
        axios.get(`${config.baseUrl}/quests/${userId}`)
            .then(function (response) {
                console.log(response);
                setQuestId(response.data[0].questCategoryId);
                setTitle(response.data[0].quest);
                setPrice(response.data[0].price);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [userId]);

    useEffect(() => {
        switch (questId) {
            case 1: setIcon("bag-icon.svg"); break;
            case 2: setIcon("clothes-icon.svg"); break;
            case 3: setIcon("ring-icon.svg"); break;
            case 4: setIcon("laptop-icon.svg"); break;
            case 6: setIcon("airplane-icon.svg"); break;
            case 5: setIcon("house-icon.svg"); break;
            case 7: setIcon("car-icon.svg"); break;
            case 8: setIcon("ticket-icon.svg"); break;
            case 9: setIcon("etc-icon.svg"); break;
        }
    })

    useEffect(() => {
        if (price) {
            const calculatedPercent = 100 * (1000 / price);
            setPercent(calculatedPercent);
        }
    }, [price]);

    return (
        <div className={styles['container']}>
            <div className={styles['background']}>
                <CircularProgressbarWithChildren
                    value={percent}
                    strokeWidth={11}
                    className={styles['main']}
                    styles={{
                        root: { height: "33vh" },
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
                    <div className={styles['icon']}>
                        <img src={`${process.env.PUBLIC_URL}/img/quest/${icon}`} />
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <div className={styles['title']}>{title}</div>
        </div>
    );
};

export default Progressbar;