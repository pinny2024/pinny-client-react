import React, { useState } from "react";
import "../../css/home/modal.css";
import { BsX } from "react-icons/bs";

const Modal = ({ handleClose, show }) => {
  const [moneyValue, setMoneyValue] = useState(""); // 돈을 입력받을 상태 값
  const [isTyped, setIsTyped] = useState(false);

  const handleConfirm = () => {
    // 확인 버튼을 클릭했을 때 로직 추가하는 부분!!
    console.log("입력된 돈:", moneyValue);
    handleClose();
  }; 

  const formatMoney = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // 콤마(,) 제거
    const newValue = value.replace(/,/g, '');
    // 입력 값이 숫자 또는 소수점으로만 구성되어 있는지 확인
    if (/^\d*\.?\d*$/.test(newValue)) {
      const formattedValue = formatMoney(newValue); // 세 자리마다 콤마 추가
      setMoneyValue(formattedValue); // 입력 칸의 값이 변경될 때마다 상태 값 업데이트
      setIsTyped(newValue.length > 0); // 입력된 값이 있는지 여부 판단!!
    }
  };

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div onClick={handleClose}><BsX className="BsX" /></div>
        <div className="modal-money">이번주에 사용할 돈은<br />얼마인가요?</div>
        <img src={`${process.env.PUBLIC_URL}/img/coin.svg`} alt="coin" />
        <input
          type="text" // type을 text로 변경
          placeholder="돈을 입력해주세요"
          value={moneyValue}
          onChange={handleChange}
        />
        <button className={isTyped ? "mint-button" : "grey-button"} onClick={handleConfirm}>확인</button>
      </section>
    </div>
  );
};

export default Modal;
