import React from "react";

import "../../css/comm/index.css"
import styles from '../../css/quest/pre-quest.module.css';

const PreQuest = () => {
    return (
        <div className={styles['container']}>
            <h1 className={styles['title']}>이전 목표를 확인하세요!</h1>
            <div className={styles['slider']}>
                <div className={styles['slider-container']}>
                    <div className={styles['slider-icon']}>
                        <img src={`${process.env.PUBLIC_URL}/img/quest/clothes-icon.svg`} className="quest-btn-icon" />
                    </div>
                    <div className={styles['slider-text']}>스투시 맨투맨</div>
                    <div className={styles['slider-date']}>24.05.12~24.06.11</div>
                </div>
                <div className={styles['slider-container']}>
                    <div className={styles['slider-icon']}>
                        <img src={`${process.env.PUBLIC_URL}/img/quest/laptop-icon.svg`} className="quest-btn-icon" />
                    </div>
                    <div className={styles['slider-text']}>맥북</div>
                    <div className={styles['slider-date']}>24.04.23~24.05.23</div>
                </div>
                <div className={styles['slider-container']}>
                    <div className={styles['slider-icon']}>
                        <img src={`${process.env.PUBLIC_URL}/img/quest/ring-icon.svg`} className="quest-btn-icon" />
                    </div>
                    <div className={styles['slider-text']}>철원이와 커플링</div>
                    <div className={styles['slider-date']}>24.02.27~24.03.27</div>
                </div>
            </div>
        </div>
    )
}

export default PreQuest;