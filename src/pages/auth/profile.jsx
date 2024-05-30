import React, { useState } from "react";
import Profile from "../../componets/auth/sign-up/profile";
import NickName from "../../componets/auth/sign-up/nickname";
import Header from '../../componets/comm/header';

const ProfilePage = () =>{

    const [nickName, setNickName] = useState("");

    const handleNickNameChange = (newNickName) => {
      setNickName(newNickName);
    };

    return(
        <>
            <Header text="회원가입"/>
            <Profile nickName={nickName} />
        </>
    )

}
export default ProfilePage;
