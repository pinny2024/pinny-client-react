import React from "react";
import Header from "../../componets/comm/header";
import MyInformation from "../../componets/mypage/myinformation";

const MyInformationPage = () => {
  return (
    <>
        <Header text = "내 정보" />
        <MyInformation />
    </>
  )
};

export default MyInformationPage;