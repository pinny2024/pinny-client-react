import React from "react";

import styles from '../../css/quest/pre-quest.module.css';


const PreQuest = () => {
    return (
        <div className={styles['container']}>
            <h1 className={styles['title']}>이전 목표를 확인하세요!</h1>
            <div className={styles['slider']}>
                <div className={styles['slider-container']}>
                    <div className={styles['slider-icon']}>
                        <img src={`${process.env.PUBLIC_URL}/img/quest/bag-icon.svg`} className="quest-btn-icon" />
                    </div>
                    <div className={styles['slider-text']}>가방</div>
                    <div className={styles['slider-date']}>23.10.10~23.11.11</div>
                </div>
                <div className={styles['slider-container']}>
                    <div className={styles['slider-icon']}>
                        <img src={`${process.env.PUBLIC_URL}/img/quest/bag-icon.svg`} className="quest-btn-icon" />
                    </div>
                    <div className={styles['slider-text']}>가방</div>
                    <div className={styles['slider-date']}>23.10.10~23.11.11</div>
                </div>
                <div className={styles['slider-container']}>
                    <div className={styles['slider-icon']}>
                        <img src={`${process.env.PUBLIC_URL}/img/quest/bag-icon.svg`} className="quest-btn-icon" />
                    </div>
                    <div className={styles['slider-text']}>가방</div>
                    <div className={styles['slider-date']}>23.10.10~23.11.11</div>
                </div>
            </div>
        </div>
    )
}

export default PreQuest;