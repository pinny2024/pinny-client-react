import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "../../css/mypage/overconsumption.module.css"
const Overconsumption = () => {
    return (
        <div className={styles['container']}>
            <p className={styles['title']}>나의 <span style={{ color: '#38D6B8' }}>과소비 지수</span>를 알아보세요!</p>
            <div className={styles['graph']}>

            </div>
            <div className={styles['setting-bar']}>
                <div className={styles['setting-bar-attribute']}>
                    <p>내 정보</p>
                    <Icon className={styles['icon']} icon="iconamoon:arrow-right-2-thin"/>
                </div>
                <div className={styles['setting-bar-attribute']}>
                    <p>내 뱃지</p>
                    <Icon className={styles['icon']} icon="iconamoon:arrow-right-2-thin"/>
                </div>
                <div className={styles['setting-bar-attribute']}>
                    <p>로그아웃</p>
                </div>
            </div>
        </div>
    )

}

export default Overconsumption;