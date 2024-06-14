import React, { useEffect, useState } from "react";
import BackgroundQuest from "../../componets/quest/background";
import QuestDataComponent from "../../componets/quest/quest-data"
import NoneProgressbar from "../../componets/quest/none-progressbar";
import Progressbar from "../../componets/quest/progressbar";
import PreQuest from "../../componets/quest/pre-quest";
import Nav from "../../componets/comm/nav";
import QuestBtn from "../../componets/quest/quest-btn";

import config from "../../config";
import axios from "axios";

const QuestData = () => {
    const [isNull, setIsNull] = useState(false);
    const userId = localStorage.getItem("id");

    useEffect(() => {
        axios.get(`${config.baseUrl}/quests/${userId}`)
            .then(function (response) {
                console.log(response);
                if (response.data.length == 0)
                    setIsNull(true);
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    return (
        <>
            {isNull ? (
                <>
                    <BackgroundQuest />
                    <NoneProgressbar />
                    <PreQuest />
                    <Nav />
                </>
            ) : (
                <>
                    <QuestDataComponent />
                    <Progressbar />
                    <PreQuest />
                    <QuestBtn />
                    <Nav />
                </>
            )}
        </>
    );
}

export default QuestData;