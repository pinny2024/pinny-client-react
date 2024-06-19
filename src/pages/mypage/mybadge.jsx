import React from "react";
import MyBadge from "../../componets/mypage/mybadge";
import Header from "../../componets/comm/header";
import styles from "../../css/mypage/mybadge.module.css";

const MyBadgePage = () => {
  return (
    <>
      <Header text="내 뱃지" />
      <div className={styles.pageBackground}>
        <MyBadge />
      </div>
    </>
  );
};

export default MyBadgePage;
