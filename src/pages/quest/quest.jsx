import React, { useEffect, useState } from "react";
import BackgroundQuest from "../../componets/quest/background";
import QuestDataComponent from "../../componets/quest/quest-data"
import Progressbar from "../../componets/quest/none-progressbar";
import PreQuest from "../../componets/quest/pre-quest";
import Nav from "../../componets/comm/nav";
import QuestBtn from "../../componets/quest/quest-btn";

import config from "../../config";
import axios from "axios";
const QuestData = () => {
    const [isNull, setIsNull] = useState(true);
    const userId = localStorage.getItem("id");

    useEffect(() => {
        axios.get(`${config.baseUrl}/quests/${userId}`)
            .then(function (response) {
                console.log(response);
                if (response.data.length == 0)
                    setIsNull(false);
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
                    <Progressbar />
                    <PreQuest />
                    <Nav />
                </>
            ) : (
                <>
                    <QuestDataComponent />
                    <Progressbar />
                    <PreQuest />
                    <Nav />
                </>
            )}
        </>
    );
}

export default QuestData;