import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/auth/sign-up/email.css";

const Email = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true); 
    const [isTyped, setIsTyped] = useState(false); 
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const typedEmail = e.target.value;
        setEmail(typedEmail);
        setIsTyped(typedEmail.length > 0); 
        setIsValidEmail(validateEmail(typedEmail)); 
    };


    const handleInputClick = () => {
      
        setIsTyped(true);
    };

    const handleInputBlur = () => {
        setIsTyped(email.length > 0); 
    };

    const handleConfirm = () => {
        //콘솔에 이메일 값이 찍히고, 비밀번호 창으로 이동합니당
        console.log("Entered Email:", email);
        navigate('/term-use/password')
    };

    
    const validateEmail = (email) => {
        // 이메일 정규표현식
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className="email-container">
            <img
                src={`${process.env.PUBLIC_URL}/img/auth/sign-up-line(2).svg`}
                alt="sign-up-line(2)"
                className="email-line"
            />
            <p className="email-label">이메일을 입력해주세요</p>
            <input
                className={`email-input ${isTyped ? "typed" : ""} ${isValidEmail ? "" : "invalid"}`} 
                type="email"
                value={email}
                onChange={handleEmailChange}
                onClick={handleInputClick} 
                onBlur={handleInputBlur} 
                placeholder="이메일 입력"
            />
            {!isValidEmail && <p className="error-message">올바른 이메일을 입력해주세요</p>} 
            {isValidEmail && isTyped && <p className="valid-message">올바른 이메일입니다</p>} 
            <button
                className={`confirm-button ${email.length > 0 ? "mint" : ""}`} 
                onClick={handleConfirm}
                disabled={!isValidEmail || email.length === 0} 
            >
                확인
            </button>
        </div>
    );
};

export default Email;
