import React from "react";
import { BsX } from "react-icons/bs";
import styles from "../../../css/plan/job-plan-modal.module.css";

const JobPlanModal = ({ handleClose, show, modalInfo }) => {
  const showHideClassName = show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={styles.planModal}>
        <div className={styles.closeButton} onClick={handleClose}>
          <BsX className={styles.closeIcon} />
        </div>
        <div className={styles.modalProfile}>
          <img 
            src={modalInfo.imageName} 
            alt="modal-img" 
            className={styles.modalImage} 
          />
          <div className={styles.modalInfo}>
            <div className={styles.jobPlanImgName}>{modalInfo.title}</div>
            <div className={styles.jobPlanJob}>{modalInfo.job}</div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL}/img/job-plan/gragh.svg`} className={styles.modalGraghImg} alt="graph" />
      </section>
    </div>
  );
};

export default JobPlanModal;
