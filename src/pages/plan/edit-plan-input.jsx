import React from "react";
import Header from "../../componets/comm/header";
import EditPlanInput from "../../componets/plan/plan-btn/edit-plan-input";

const EditPlanInputPage = () => {
    return(
        <div>
            <Header text="계획 세우기!"/>
            <EditPlanInput />
        </div>
    )
}

export default EditPlanInputPage;