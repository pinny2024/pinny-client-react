import React, { useState, useEffect } from "react";
import ButtonOptions from "../text/buttonoptions";
import '../../../css/auth/sign-up/nickname.css';
import { useNavigate } from "react-router-dom";

const NickName = ({ onNickNameChange }) => {
  console.log(onNickNameChange);
  const [localNickName, setLocalNickName] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [savings, setSavings] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const allInputsCompleted = localNickName !== "" && job !== "" && salary !== "" && savings !== "" && ageGroup !== "" && introduction !== "";
    setIsCompleted(allInputsCompleted);
  }, [localNickName, job, salary, savings, ageGroup, introduction]);

  const jobOptions = {
    placeholder: "직업 선택",
    values: ["교사", "의사", "회사원", "예술인", "개발자", "아르바이트"]
  };

  const ageGroupOptions = {
    placeholder: "나이대 선택",
    values: ["10대", "20대", "30대", "40대", "50대", "60대 이상"]
  };

  const handleConfirm = () => {
    localStorage.setItem("nickname", localNickName);
    localStorage.setItem("job", job);
    localStorage.setItem("salary", salary);
    localStorage.setItem("saving", savings);
    localStorage.setItem("ageGroup", ageGroup);
    localStorage.setItem("introduction", introduction);
    navigate('/term-use/profile', {
      state: {
        nickName: localNickName
      }
    });
  };

  const addCommas = (value) => {
    let stringValue = String(value);
    const decimalIndex = stringValue.indexOf('.');
    let integerPart = stringValue;
    let decimalPart = '';
    
    if (decimalIndex !== -1) {
      integerPart = stringValue.slice(0, decimalIndex);
      decimalPart = stringValue.slice(decimalIndex);
    }

    let result = '';
    let count = 0;
    for (let i = integerPart.length - 1; i >= 0; i--) {
      result = integerPart[i] + result;
      count++;
      if (count % 3 === 0 && i !== 0) {
        result = ',' + result;
      }
    }

    if (decimalPart !== '') {
      result += decimalPart;
    }
    
    return result;
  };

  return (
    <div className={`nickname-container ${isCompleted ? 'completed' : ''}`}>
      <img
        src={`${process.env.PUBLIC_URL}/img/auth/sign-up-line(4).svg`}
        alt="sign-up-line(4)"
        className="nickname-line"
      />
      <div className="nickname-input-all">
        <div className="nickname-input-name">사용자 정보를 입력해주세요</div>
        <input
          type="text"
          placeholder="닉네임"
          value={localNickName}
          onChange={(e) => setLocalNickName(e.target.value)}
        />
        <ButtonOptions
          options={jobOptions}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <input
          type="text"
          placeholder="월급"
          value={addCommas(salary)}
          onChange={(e) => setSalary(e.target.value.replace(/,/g, ''))}
        />
        <input
          type="text"
          placeholder="저축"
          value={addCommas(savings)}
          onChange={(e) => setSavings(e.target.value.replace(/,/g, ''))}
        />

        <ButtonOptions
          options={ageGroupOptions}
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
        />
        <input
          type="text"
          placeholder="한 줄 소개"
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
        />
        <button
          className={`nickname-button ${isCompleted ? 'active' : ''}`}
          onClick={handleConfirm}
          disabled={!isCompleted}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default NickName;
