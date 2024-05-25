import React from "react";
import Header from "../../componets/comm/header";
// import PlanChangeDetail from "../../componets/plan/plan-change-btn/plan-change-detail";
import PlanList from "../../componets/plan/plan-btn/plan-list";

const PlanDetailPage = () => {
    return(
        <div>
            <Header text="계획 세우기!"/>
            <PlanList context="modify"/>
        </div>
    )
}

export default PlanDetailPage;