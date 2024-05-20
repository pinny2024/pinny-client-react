import React from "react";
import BackgroundQuest from "../../componets/quest/background";
import Progressbar from "../../componets/quest/progressbar";
import PreQuest from "../../componets/quest/pre-quest";
import Nav from "../../componets/comm/nav";
const QuestData = () => {
    return (
        <>
            <BackgroundQuest />
            <Progressbar/>
            <PreQuest/>
            <Nav/>
        </>
    )
}

export default QuestData;