import React from 'react';
import Modal from 'react-modal';
import styles from '../../css/comm/delete-modal.module.css';

const DeleteModal = ({ modalIsOpen, closeModal, content }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={styles['ReactModal__Content']}
            overlayClassName={styles['ReactModal__Overlay']}
            contentLabel={styles['Trash Modal']}
        >
            <p>{content}</p>
            <button className={styles['modal-yes-button']} onClick={closeModal}>네</button>
            <button className={styles['modal-no-button']} onClick={closeModal}>아니요</button>
        </Modal>
    );
}

export default DeleteModal;
