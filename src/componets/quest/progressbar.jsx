import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../css/comm/index.css";
import styles from "../../css/quest/progressbar.module.css";
import axios from "axios";
import config from '../../config';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Progressbar = () => {
    const [questData, setQuestData] = useState([]);
    const userId = localStorage.getItem("id");

    useEffect(() => {
        axios.get(`${config.baseUrl}/quests/${userId}`)
            .then(function (response) {
                console.log(response);
                setQuestData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [userId]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles['container']}>
            <Slider {...settings}>
                {questData.map((quest, index) => (
                    <div key={index} className={styles['slider-item']}>
                        <div className={styles['background']}>
                            <CircularProgressbarWithChildren
                                value={0} 
                                strokeWidth={11}
                                className={styles['main']}
                                styles={{
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
                ))}
            </Slider>
        </div>
    );
};

export default Progressbar;