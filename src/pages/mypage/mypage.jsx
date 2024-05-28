import React from "react";
import Profile from "../../componets/mypage/profile"
import Badge from "../../componets/mypage/badge"
import Overconsumption from "../../componets/mypage/overconsumption";
import Nav from "../../componets/comm/nav";

const MypagePage = () => {
    return (
        <>
            <Profile />
            <Badge />
            <Overconsumption/>
            <Nav />
        </>
    )
}

export default MypagePage;