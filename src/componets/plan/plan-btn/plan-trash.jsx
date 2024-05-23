import React from 'react';
import DeleteModal from '../../comm/delete-modal';

const PlanTrash = ({ modalIsOpen, closeModal, buttonTexts }) => {
    
    const count = buttonTexts.length;
    const firstButtonText = buttonTexts[0];
    
    const content = `${firstButtonText} ${count > 1 ? `외 ${count - 1}개의\n 계획을 삭제할까요?` : ''}`;

    return (
        <DeleteModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            content={content}
        />
    );
};

export default PlanTrash;
