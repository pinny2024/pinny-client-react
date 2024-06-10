import React from 'react';
import Modal from 'react-modal';
import styles from '../../css/comm/delete-modal.module.css';

const DeleteModal = ({ modalIsOpen, closeModal, content, onConfirm }) => {
    const formattedContent = content.replace(/\n/g, '<br />');
    
    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
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
