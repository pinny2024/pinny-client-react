import React from "react";

import styles from "../../css/mypage/profile.module.css"
const Profile = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['profile_img']}>
                <img src={`${process.env.PUBLIC_URL}/img/mypage/profile_img.png`} className="quest-btn-icon" />
                <p className={styles['nickname']}>핀핀이님</p>
            </div>
        </div>
    )

}

export default Profile;
