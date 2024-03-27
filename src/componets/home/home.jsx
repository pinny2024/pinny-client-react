import React from "react";
import "../../css/comm/index.css"
import "../../css/home/home.css"
import TopSheet from "./TopSheet";
import "../../pages/imcon-expend"
import Nav from "../comm/nav";

const Home = () => {
    return (
        <div className="plan">
            <div className="top"> 
               <TopSheet />
                <div className="use-money">
                    
                </div> 
                <div className="week-plan">
                    <div className="week-plan-name">
                        일주일 예산을<br />세워보세요!
                    </div>
                    <div className="week-plan-button">
                        <button>예산 세우기</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="career">
                <div className="career-name">
                    오늘 실천한 계획을 체크해 주세요!
                </div>
                <div className="career-button">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className="bottom-bar">
                <Nav />
            </div>

        </div>
    )
}

export default Home;