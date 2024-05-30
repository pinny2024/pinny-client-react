import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../../css/auth/sign-up/password.css'; // CSS 파일을 import합니다.

const PassWord = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    setIsValidPassword(passwordRegex.test(newPassword));
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setIsValidConfirmPassword(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    console.log("Entered Password:", password); //비밀번호 값 콘솔에 찍기
    alert("비밀번호가 설정되었습니다.");
    navigate('/term-use/nickname');
  };

  return (
    <div className="password-container">
        <img
            src={`${process.env.PUBLIC_URL}/img/auth/sign-up-line(3).svg`}
            alt="sign-up-line(3)"
            className="password-line"
        />
      <div className="input-group">
        <div className="password-input-name">비밀번호를 생성해주세요</div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={isValidPassword ? "valid" : "invalid"}
          placeholder="비밀번호를 생성하기"
        />
        
        {!isValidPassword && (
          <p className="password-error-message">영문, 숫자, 특수문자를 포함하여 6글자 이상</p>
        )}
        {isValidPassword && (
          <p className="password-success-message">조건에 맞는 비밀번호입니다</p>
        )}
      </div>
      <div className="input-group">
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={isValidConfirmPassword ? "valid" : "invalid"}
          placeholder="비밀번호 재확인"
        />
        {!isValidConfirmPassword && confirmPassword.length > 0 && (
          <p className="password-error-message">일치하지 않는 비밀번호입니다</p>
        )}
        {isValidConfirmPassword && (
          <p className="password-success-message">일치하는 비밀번호입니다</p>
        )}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!isValidPassword || !isValidConfirmPassword}
        className={`submit-button ${isValidPassword && isValidConfirmPassword ? "active" : ""}`}
      >
        확인
      </button>
    </div>
  );
};

export default PassWord;
