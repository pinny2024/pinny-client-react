import React from "react";
import styles from '../../../css/plan/plan-btn/plan-list-bottom-bar.module.css'; // Import CSS Module

const PlanListBottomBar = ({ handleComplete, handleCancel }) => {
    return (
        <div className={styles.allPlanBottom}>
            <hr className={styles.planListBottomHr} />
            <div className={styles.planListBottomBar}>
                <button className={styles.completeButton} onClick={handleComplete}>완료</button>
                <button className={styles.cancelButton} onClick={handleCancel}>취소</button>
            </div>
        </div>
    );
}

export default PlanListBottomBar;
