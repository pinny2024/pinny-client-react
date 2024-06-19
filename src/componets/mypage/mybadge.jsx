import React from "react";
import styles from "../../css/mypage/mybadge.module.css";

const MyBadge = () => {
  return (
    <div className={styles.mybadge}>
      <hr className={styles.hr} />
      <div className={styles.badgelist}>
        <div className={styles.badgeimage}>
          <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-4.svg`} alt="Pinny 스타터" />
          <span className={styles.text}>Pinny 스타터</span>
        </div>
        <div className={styles.badgeimage}>
          <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-3.svg`} alt="3연속 계획 성공" />
          <span className={styles.text}>3연속 계획 성공</span>
        </div>
        <div className={styles.badgeimage}>
          <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-2.svg`} alt="일주일 출석왕" />
          <span className={styles.text}>일주일 출석왕</span>
        </div>
        <div className={styles.badgeimage}>
          <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-1.svg`} alt="수입, 지출의 끝판왕" />
          <span className={styles.text}>수입, 지출의 <br />끝판왕</span>
        </div>
      </div>
    </div>
  )
};

export default MyBadge;
