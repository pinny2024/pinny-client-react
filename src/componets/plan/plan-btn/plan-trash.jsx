import React from 'react';
import Modal from 'react-modal';
import '../../../css/plan/plan-btn/plan-trash.css';

const PlanTrash = ({ modalIsOpen, closeModal, buttonTexts }) => {
    
    const count = buttonTexts.length;
   
    const firstButtonText = buttonTexts[0];
    
    const remainingButtonTexts = buttonTexts.slice(1);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="ReactModal__Content"
            overlayClassName="ReactModal__Overlay"
            contentLabel="Trash Modal"
        >
            <h2>{firstButtonText} {count > 1 && `외 ${count - 1} 개의 계획을 삭제할까요?`}</h2>
            <button className="modal-yes-button" onClick={closeModal}>네</button>
            <button className="modal-no-button" onClick={closeModal}>아니요</button>
            {/* 나머지 버튼들의 텍스트 출력
            {remainingButtonTexts.map((buttonText, index) => (
                <p key={index}>{buttonText}</p>
            ))} */}
        </Modal>
    );
};

export default PlanTrash;
