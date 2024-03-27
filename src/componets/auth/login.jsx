import React from "react";
import "../../css/auth/login.css"
import "../../css/comm/index.css"

const Login = () => {
    return (
        <>
            <div className="login-text">
                <h1>돈 모으기를 시작해볼까요?</h1>
            </div>
            <div className="login-main">
                <input type="text" className="login-input-email" placeholder="이메일을 입력하세요"></input>
                <input type="text" className="login-input-password" placeholder="비밀번호를 입력해주세요"></input>
                <button type="submit" className="login-submit-btn">확인</button>
                <div className="login-list">
                    <p>회원가입</p>
                    <p>아이디/비번 찾기</p>
                </div>
            </div>
            <div className="login-auth">
                <div className="login-auth-hr">
                    <hr></hr>
                    <p>또는</p>
                    <hr></hr>
                </div>
                <div className="login-auth-img">
                    <img src="img/kakao.png"></img>
                    <img src="img/naver.png"></img>
                    <img src="img/google.png"></img>
                </div>
            </div>
        </>
    );
};

export default Login;