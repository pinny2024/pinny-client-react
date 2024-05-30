import React from "react";
import Header from "../../componets/comm/header";
import TermUse from "../../componets/auth/sign-up/term-use";

const TermUsePage = () =>{
    return (
        <>
            <Header text="회원가입"/>
            <TermUse />
        </>
    )
}

export default TermUsePage;