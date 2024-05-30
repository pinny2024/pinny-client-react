// NickNamePage Component
import React, { useState } from "react";
import Profile from "../../componets/auth/sign-up/profile";
import NickName from "../../componets/auth/sign-up/nickname";
import Header from "../../componets/comm/header";

// NickNamePage Component
const NickNamePage = () => {
    const [nickName, setNickName] = useState("");

    const handleNickNameChange = (newNickName) => {
        console.log("New Nickname:", newNickName); 
        setNickName(newNickName); 
    };

    return (
        <>
            <Header text="회원가입"/>
            <NickName onNickNameChange={handleNickNameChange} />
            
        </>
    );
};

export default NickNamePage;
