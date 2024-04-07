import React from "react";
import '../../../css/plan/job-plan.css';

const JobPlan = ()=> {

    return (
        <div className="job-plan-manage">
            <div className="job-plan-name">
                나와 같은 직종은 이렇게<br />관리해요!
            </div>
            <div className="job-plan-button">
                <button>
                    <img src={`${process.env.PUBLIC_URL}/img/job-plan/job-plan-image(1).svg`} />
                    <div className="job-plan-img-name">
                        웨이드 웨이드
                    </div>
                    <div className="job-plan-job">
                        2년차 초등학교 선생님
                    </div>
                </button>
                <button>
                    <img src={`${process.env.PUBLIC_URL}/img/job-plan/job-plan-image(2).svg`} />
                    <div className="job-plan-img-name">
                        어이거기너
                    </div>
                    <div className="job-plan-job">
                        유치원 근무
                    </div>
                </button>
                <button>
                    <img src={`${process.env.PUBLIC_URL}/img/job-plan/job-plan-image(3).svg`} />
                    <div className="job-plan-img-name">
                        파워선생님
                    </div>
                    <div className="job-plan-job">
                        초등학교 센세
                    </div>
                </button>
            </div>
        </div>
    )

}

export default JobPlan;