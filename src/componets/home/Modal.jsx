import React, { useState } from "react";
import "../../css/home/modal.css";
import { BsX } from "react-icons/bs";

const Modal = ({ handleClose, show, handleConfirm }) => {
  const [moneyValue, setMoneyValue] = useState(""); 
  const [isTyped, setIsTyped] = useState(false);

  const handleConfirmClick = () => {
    if (moneyValue.trim() !== "") {
      handleConfirm(parseInt(moneyValue.replace(/,/g, ""))); 
      handleClose(); 
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    
    const newValue = value.replace(/,/g, "");

    const formattedValue = parseInt(newValue).toLocaleString();

    
    setMoneyValue(formattedValue);
    setIsTyped(newValue.length > 0);
  };

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main"> 
        <div onClick={handleClose}><BsX className="BsX" /></div>
        <div className="modal-money">이번주에 사용할 돈은<br />얼마인가요?</div>
        <img src={`${process.env.PUBLIC_URL}/img/income-expend/coin.svg`} alt="coin" />
        <input
          type="text" 
          placeholder="돈을 입력해주세요"
          value={moneyValue}
          onChange={handleChange}
        />
        <button className={isTyped ? "mint-button" : "grey-button"} onClick={handleConfirmClick}>확인</button>
      </section>
    </div>
  );
};

export default Modal;
