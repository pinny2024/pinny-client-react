import React from "react";
import Profile from "../../componets/mypage/profile"
import Badge from "../../componets/mypage/badge"
import SettingBar from "../../componets/mypage/settingbar";
import Nav from "../../componets/comm/nav";
import Graph from "../../componets/mypage/graph";
import styles from "../../css/mypage/settingbar.module.css";

const MypagePage = () => {
    return (
        <>
            <div className={styles.height}>
                <Profile />
                <Badge />
                <Graph />
                <SettingBar />
            </div>
            <Nav />
        </>


    )
}

export default MypagePage;
