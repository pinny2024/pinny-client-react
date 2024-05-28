import React from 'react';
import DeleteModal from '../../comm/delete-modal';

const PlanTrash = ({ modalIsOpen, closeModal, buttonTexts }) => {
    
    const count = buttonTexts.length;
    const firstButtonText = buttonTexts[0];
    
    let content;

    if (count === 1) {
        content = ` ${firstButtonText} 계획을 삭제할까요?`;
    } else {
        content = `${firstButtonText} 외 ${count - 1}개의\n 계획을 삭제할까요?`;
    }

    return (
        <DeleteModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            content={content}
        />
    );
};

export default PlanTrash;
