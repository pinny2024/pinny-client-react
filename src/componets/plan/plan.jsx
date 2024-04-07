import React from "react";
import Nav from "../comm/nav";
import PostBtn from "./post-btn";
import TopWeekStatus from "./week/top-week-status";
import JobPlan from "./job/job-plan";

const Plan = () => {
    return (
        <div className="plan-status">
            <div className="top-week-status"> 
               <TopWeekStatus />
            </div>
            <div className="job-plan">
                <JobPlan />
            </div>
            <div className="post-btn">
                <PostBtn />
            </div>
            <div className="bottom-bar">
                <Nav />
            </div>
            
        </div>
    )
}

export default Plan;