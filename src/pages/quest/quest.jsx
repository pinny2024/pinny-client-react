import React from "react";
import BackgroundQuest from "../../componets/quest/background";
import Progressbar from "../../componets/quest/progressbar";
import PreQuest from "../../componets/quest/pre-quest";
import Nav from "../../componets/comm/nav";
import QuestBtn from "../../componets/quest/quest-btn";
const QuestData = () => {
    return (
        <>
            <BackgroundQuest />
            <QuestBtn/>
            <Progressbar/>
            <PreQuest/>
            <Nav/>
        </>
    )
}

export default QuestData;