import React from "react";
import Header from "../../../componets/comm/header";
import QuestSelect from "../../../componets/quest/quest-select";

const QuestSelectPage = () => {
    return (
        <>
            <Header text="목표 수정하기"/>
            <QuestSelect/>
        </>
    )
}

export default QuestSelectPage;