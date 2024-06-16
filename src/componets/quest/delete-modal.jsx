import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styles from '../../css/comm/delete-modal.module.css';
import axios from 'axios';
import config from '../../config';

const DeleteModal = ({ modalIsOpen, closeModal, content, onConfirm }) => {
    const formattedContent = content.replace(/\n/g, '<br />');
    const userId = localStorage.getItem("id");
    const [questId, setQuestId] = useState(null);

    const navigate = useNavigate;

    useEffect(() => {
        axios.get(`${config.baseUrl}/quests/${userId}`)
            .then(function (response) {
                setQuestId(response.data[0].questId);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [questId]);

    const handleConfirm = () => {
        if (questId) {
            axios.delete(`${config.baseUrl}/quests/${questId}`)
                .then(response => {
                    console.log(response);
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                })
        }
        closeModal();
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={styles.ReactModal__Content}
            overlayClassName={styles.ReactModal__Overlay}
            contentLabel="Trash Modal"
        >
            <p dangerouslySetInnerHTML={{ __html: formattedContent }} />
            <div className={styles['modal-footer']}>
                <button className={styles['modal-yes-button']} onClick={handleConfirm}>네</button>
                <button className={styles['modal-no-button']} onClick={closeModal}>아니요</button>
            </div>
        </Modal>
    );
}

export default DeleteModal;
