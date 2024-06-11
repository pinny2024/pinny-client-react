// PlanTrash.js

import React from 'react';
import DeleteModal from '../../comm/delete-modal';



  const PlanTrash = ({ modalIsOpen, closeModal, buttonTexts, deletePlans, clickedButtons, planName }) => {
    const count = clickedButtons.length;
  
    let content;
  
    if (count === 1) {
      content = `${planName} 계획을 삭제할까요?`;
    } else if(count >1){
      content = `${planName} 외 ${count - 1}개의 계획을 삭제할까요?`;
    }else{
      content = `삭제할 버튼을 선택해주세요.`;
    }
  
    const handleDelete = () => {
      deletePlans();
    };
  
    return (
      <DeleteModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        content={content}
        onConfirm={handleDelete}
      />
    );
  };
  
  export default PlanTrash;
  
