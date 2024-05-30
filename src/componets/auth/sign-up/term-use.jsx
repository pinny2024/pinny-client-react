// TermUse.js

import React, { useState } from "react";
import { termText } from "../text/terms";
import { serviceText } from "../text/service";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import "../../../css/auth/sign-up/term-use.css";
import { useNavigate } from "react-router-dom";

const TermUse = () => {
  const [terms, setTerms] = useState({
    termAgreement: false,
    privacyAgreement: false,
  });

  const [expandedTerm, setExpandedTerm] = useState(false);
  const [expandedPrivacy, setExpandedPrivacy] = useState(false);
  const navigate = useNavigate();

  const handleNextButtonClick = () =>{
    navigate("/term-use/email");
  }

  const handleTermAgreementChange = () => {
    setTerms((prevState) => ({
      ...prevState,
      termAgreement: !prevState.termAgreement,
    }));
  };

  const handlePrivacyAgreementChange = () => {
    setTerms((prevState) => ({
      ...prevState,
      privacyAgreement: !prevState.privacyAgreement,
    }));
  };

  const toggleTermContent = (type) => {
    if (type === "term") {
      setExpandedTerm(!expandedTerm);
    } else if (type === "privacy") {
      setExpandedPrivacy(!expandedPrivacy);
    }
  };

  return (
    <div className="terms-container">
      <img
        src={`${process.env.PUBLIC_URL}/img/auth/sign-up-line(1).svg`}
        alt="sign-up-line(1)"
      />
      <div className="terms-name">이용약관 동의</div>
      <div className="term">
        <div className="term-header">
          <FaCheck
            className={`icon ${terms.termAgreement ? "checked" : ""}`}
            onClick={handleTermAgreementChange}
          />
          <label onClick={() => toggleTermContent("term")}>
            이용약관 <span className="required">(필수)</span>
          </label>
        </div>
        <div className="term-content-wrapper">
          <div
            id="term-text"
            className={`term-content ${expandedTerm ? "expanded" : ""}`}
          >
            <p>{termText}</p>
          </div>
          <div className="chevron-wrapper">
            <FaChevronDown
              className={`arrow-icon ${expandedTerm ? "expanded" : ""}`}
              onClick={() => toggleTermContent("term")}
            />
          </div>
        </div>
      </div>
      <div className="term">
        <div className="term-header">
          <FaCheck
            className={`icon ${terms.privacyAgreement ? "checked" : ""}`}
            onClick={handlePrivacyAgreementChange}
          />
          <label onClick={() => toggleTermContent("privacy")}>
            개인정보 수집 및 이용동의 <span className="required">(필수)</span>
          </label>
        </div>
        <div className="term-content-wrapper">
          <div
            id="service-text"
            className={`term-content ${expandedPrivacy ? "expanded" : ""}`}
          >
            <p>{serviceText}</p>
          </div>
          <div className="chevron-wrapper">
            <FaChevronDown
              className={`arrow-icon ${expandedPrivacy ? "expanded" : ""}`}
              onClick={() => toggleTermContent("privacy")}
            />
          </div>
        </div>
      </div>
      <button className = "term-arrow-button" disabled={!terms.termAgreement || !terms.privacyAgreement} onClick={handleNextButtonClick}>
        모두 동의하기
      </button>
    </div>
  );
};

export default TermUse;
