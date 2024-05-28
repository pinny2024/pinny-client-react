import React from "react";
import Profile from "../../componets/mypage/profile"
import Badge from "../../componets/mypage/badge"
import SettingBar from "../../componets/mypage/settingbar";
import Nav from "../../componets/comm/nav";
import Graph from "../../componets/mypage/graph";

const MypagePage = () => {
    return (
        <>
            <Profile />
            <Badge />
            <Graph />
            <SettingBar/>
            <Nav />
        </>
    )
}

export default MypagePage;
