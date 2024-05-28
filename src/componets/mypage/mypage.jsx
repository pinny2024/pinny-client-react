import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopProfile from "./top-profile";
import Nav from "../comm/nav";
import Overconsumption from "./overconsumption";
import MypageList from "./mypage-list";

const MyPage = () => {
    const location = useLocation();
    const [profile, setProfile] = useState({
        nickname: '성찬이님',
        profilePhoto: null,
    });

    useEffect(() => {
        if (location.state && location.state.updatedProfile) {
            setProfile(location.state.updatedProfile);
        }
    }, [location.state]);

    return (
        <div className="mypage">
            <TopProfile nickname={profile.nickname} profilePhoto={profile.profilePhoto} />
            <div className="overconsumption">
                <Overconsumption />
            </div>
            <div className="mypage-list">
                <MypageList />
            </div>
            <div className="bottom-bar">
                <Nav />
            </div>
        </div>
    );
};

export default MyPage;
