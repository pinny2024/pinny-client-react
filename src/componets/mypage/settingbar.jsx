import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "../../css/mypage/settingbar.module.css"
const SettingBar = () => {
    return (
        <div className={styles['setting-bar']}>
            <div className={styles['setting-bar-attribute']}>
                <p>내 정보</p>
                <Icon className={styles['icon']} icon="iconamoon:arrow-right-2-thin" />
            </div>
            <div className={styles['setting-bar-attribute']}>
                <p>내 뱃지</p>
                <Icon className={styles['icon']} icon="iconamoon:arrow-right-2-thin" />
            </div>
            <div className={styles['setting-bar-attribute']}>
                <p>로그아웃</p>
            </div>
        </div>
    )

}

export default SettingBar;