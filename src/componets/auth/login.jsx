import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/auth/login.css"
import "../../css/comm/index.css"
import config from '../../config';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleTermUse = () => {
        navigate('/term-use')
    }

    const handleSubmitClick = () => {
        const data = {
            email: email,
            password: password
        };

        axios.post(`${config.baseUrl}/login`, data)
            .then(function (response) {
                console.log(response);
                alert("로그인 성공");

                const id = response.data.userId;
                localStorage.setItem("id", id);
                navigate("/home");
            })
            .catch(function (error) {
                alert("로그인 실패");
                console.log(error);
            })
    }

    return (
        <>
            <div className="login-text">
                <h1>돈 모으기를 시작해볼까요?</h1>
            </div>
            <div className="login-main">
                <input type="text"
                    className="login-input-email"
                    placeholder="이메일을 입력하세요"
                    onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text"
                    className="login-input-password"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" className="login-submit-btn" onClick={handleSubmitClick}>확인</button>
                <div className="login-list">
                    <p onClick={handleTermUse}>회원가입</p>
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
                    <img src="img/auth/kakao.png"></img>
                    <img src="img/auth/naver.png"></img>
                    <img src="img/auth/google.png"></img>
                </div>
            </div>
        </>
    );
};

export default Login;