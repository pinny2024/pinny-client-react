import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import styles from "../../css/home/modal.module.css";
import { BsX } from "react-icons/bs";

const Modal = ({ handleClose, show, handleConfirm }) => {
  const [moneyValue, setMoneyValue] = useState("");
  const [isTyped, setIsTyped] = useState(false);
  const userId = localStorage.getItem("id");

  const handleConfirmClick = () => {
    if (moneyValue.trim() !== "") {
      const budgetAmount = parseInt(moneyValue.replace(/,/g, ""));
      const endpoint = `/budget/${userId}`;

      axios.put(endpoint, { totalBudget: budgetAmount })
        .then((response) => {
          console.log("Budget update successful:", response.data);
          const remainingBudget = response.data.remainingBudget;
          handleConfirm(budgetAmount, remainingBudget);
          handleClose();
        })
        .catch((error) => {
          axios.post(endpoint, { totalBudget: budgetAmount })
            .then((response) => {
              console.log("Budget creation successful:", response.data);
              const remainingBudget = response.data.remainingBudget;
              handleConfirm(budgetAmount, remainingBudget);
              handleClose();
            })
            .catch((error) => {
              console.error("Error creating or updating budget:", error);
            });
        });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const newValue = value.replace(/[^\d,]/g, "");
    const formattedValue = newValue !== "" ? parseInt(newValue.replace(/,/g, ""), 10).toLocaleString() : "";
    setMoneyValue(formattedValue);
    setIsTyped(newValue.length > 0);
  };

  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section className={styles.modalMain}>
        <div onClick={handleClose}>
          <BsX className={styles.BsX} />
        </div>
        <div className={styles.modalMoney}>
          이번주에 사용할 돈은
          <br />
          얼마인가요?
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/img/income-expend/coin.svg`}
          alt="coin"
        />
        <input
          type="text"
          placeholder="돈을 입력해주세요"
          value={moneyValue}
          onChange={handleChange}
        />
        <button
          className={isTyped ? styles.mintButton : styles.greyButton}
          onClick={handleConfirmClick}
        >
          확인
        </button>
      </section>
    </div>
  );
};

export default Modal;
