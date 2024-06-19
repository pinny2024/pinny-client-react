import React from "react";
import Header from "../../componets/plan/Header";
import PlanList from "../../componets/plan/plan-btn/plan-list";
const PlanListPage = () => {
    return(
        <div>
            <Header text="계획 세우기!"/>
            <PlanList context="add"/>
        </div>
    )
}

export default PlanListPage;