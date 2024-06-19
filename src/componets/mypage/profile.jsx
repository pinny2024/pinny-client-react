import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../config";

import styles from "../../css/mypage/profile.module.css"
const Profile = () => {
    const userId = parseInt(localStorage.getItem("id"));
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get(`${config.baseUrl}/users`)
        .then(response => {
            const user = response.data.find(user => user.id == userId);
            setUserData(user);
        })
        .catch(error => {
            console.log(error);
        })
    }, [userId]);

    return (
        <div className={styles['container']}>
            <div className={styles['profile_img']}>
                <img src={`${process.env.PUBLIC_URL}/img/mypage/profile_img.png`} className="quest-btn-icon" />
                <p className={styles['nickname']}>{userData.nickname}</p>
            </div>
        </div>
    )

}

export default Profile;
