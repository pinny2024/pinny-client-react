import React, { useState } from "react";
import DeleteModal from '../../componets/comm/delete-modal';

import "../../css/comm/index.css"
import styles from '../../css/quest/quest-btn.module.css';
import { useNavigate } from "react-router-dom";

const QuestBtn = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const content = `목표를 삭제할까요?`;

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
        setModalOpen(false);
    }
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['button']} onClick={handleUpdateButton}>수정</div>
                <div className={styles['button']} onClick={handleDeleteButton}>삭제</div>
            </div>
            {modalOpen && <DeleteModal modalIsOpen={handleCloseModal} closeModal={handleDelete} content={content}/>}
        </>
    )
}

export default QuestBtn;