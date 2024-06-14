import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import "../../css/comm/index.css";
import styles from "../../css/quest/background.module.css";

const BackgroundQuest = () => {
    const userId = localStorage.getItem("id");
    const [price, setPrice] = useState("");
    const [percent, setPercent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        axios.get(`${config.baseUrl}/quests/${userId}`)
            .then(function (response) {
                console.log(response);
                setPrice(response.data[0].price);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [userId]);

    useEffect(() => {
        if (price) {
            const calculatedPercent = 100 * (1000 / price);
            setPercent(calculatedPercent);
        }
    }, [price]);

    useEffect(() => {
        if (percent !== "") {
            updateTitle(percent);
        }
    }, [percent]);

    const updateTitle = (percent) => {
        const roundedPercent = Math.floor(percent / 10) * 10;

        switch (roundedPercent) {
            case 0: setTitle("목표를 이루기 위해 힘내봐요!"); break;
            case 10: setTitle("앞으로 열심히 달려볼까요?"); break;
            case 20: setTitle("앞으로 힘내보세요!"); break;
            case 30: setTitle("이 정도의 속도라니 엄청나요!"); break;
            case 40: setTitle("포기하기엔 일러요! 화이팅"); break;
            case 50: setTitle("벌써 50%군요! 대단한데요?"); break;
            case 60: setTitle("열심히 노력해 주세요!"); break;
            case 70: setTitle("앞으로 30% 남았어요!"); break;
            case 80: setTitle("고지가 코앞이에요!"); break;
            case 90: setTitle("마지막 10%를 위해 힘내주세요!"); break;
            case 100: setTitle("목표 달성! 축하합니다!"); break;
            default: setTitle("목표를 이루기 위해 힘내봐요!"); break;
        }
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}>{percent}% 채워졌습니다!</p>
            <p className={styles.subtitle}>{title}</p>
        </div>
    );
};

export default BackgroundQuest;
