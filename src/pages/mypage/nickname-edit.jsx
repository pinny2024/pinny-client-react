import React, { useState } from 'react';
import Header from "../../componets/comm/header";
import NicknameEdit from "../../componets/mypage/nickname-edit";
import { useNavigate } from 'react-router-dom';

const NicknameEditPage = () => {
    const [profile, setProfile] = useState({
        nickname: '성찬이님',
        profilePhoto: null,
    });

    const navigate = useNavigate();

    const handleUpdateProfile = (updatedProfile) => {
        setProfile(updatedProfile);
        navigate('/mypage', { state: { updatedProfile } }); 
    };

    return (
        <>
            <Header text="닉네임 수정" />
            <NicknameEdit onUpdateProfile={handleUpdateProfile} />
        </>
    );
};

export default NicknameEditPage;
