import React from "react";

import styles from "../../css/mypage/badge.module.css"

const Badge = () => {
    return (
        <div className={styles['container']}>
            <p className={styles['title']}>뱃지를 모아볼까요?</p>
            <div className={styles['badge']}>
                <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-good.png`} className={styles['badge-icon']}/>
                <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-week.png`} className={styles['badge-icon']} />
                <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-day.png`}className={styles['badge-icon']} />
                <img src={`${process.env.PUBLIC_URL}/img/mypage/badge-sprout.png`} className={styles['badge-icon']} />
            </div>
        </div>
    )
}

export default Badge;