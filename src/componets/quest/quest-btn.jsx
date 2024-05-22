import React, { useState } from "react";
import DeleteModal from '../../componets/comm/delete-modal';

import "../../css/comm/index.css"
import styles from '../../css/quest/quest-btn.module.css';
import { useNavigate } from "react-router-dom";


const QuestBtn = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const handleUpdateButton = () => {
        navigate('/quest/update/content')
    }
    const handleDeleteButton = () => {
        setModalOpen(true);
    }
    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const handleDelete = () => {
        // 실제 삭제 작업을 수행하는 로직
        console.log('삭제 완료');
        setModalOpen(false);
    }
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['button']} onClick={handleUpdateButton}>수정</div>
                <div className={styles['button']} onClick={handleDeleteButton}>삭제</div>
            </div>
            {modalOpen && <DeleteModal modalIsOpen={handleCloseModal} closeModal={handleDelete} content="버어어억"/>}
        </>
    )
}

export default QuestBtn;