import React from "react";
import Nav from "../comm/nav";
import PostBtn from "./plan-btn/post-btn";
import TopWeekStatus from "./week/top-week-status";
import JobPlan from "./job/job-plan";

const Plan = ({ plans }) => {
  // console.log('Plans in Plan component:', plans); // 여기서 데이터가 올바르게 출력되는지 확인합니다.

  return (
    <div className="plan-status">
      <div className="top-week-status"> 
        <TopWeekStatus plans={plans} />
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
  );
};

export default Plan;
