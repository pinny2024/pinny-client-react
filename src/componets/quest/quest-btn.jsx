import React from "react";

import styles from '../../css/quest/quest-btn.module.css';
import { useNavigate } from "react-router-dom";

const QuestBtn = () => {
    const navigate = useNavigate();
    const handleUpdateButton = () => {
        navigate('/quest/update/content')
    }
    const handleDeleteButton = () => {
        navigate('/quest/delete')
    }
    return (
        <div className={styles['container']}>
            <div className={styles['button']} onClick={handleUpdateButton}>수정</div>
            <div className={styles['button']} onClick={handleDeleteButton}>삭제</div>
        </div>
    )
}

export default QuestBtn;