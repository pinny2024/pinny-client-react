import React from "react";
import "../../css/comm/index.css"
// import "../../css/home/home.css"
import TopSheet from "./TopSheet";
import "../../pages/income-expend/income-expend"
import WeekPlan from "../home/week-plan"
import Nav from "../comm/nav";

const Home = () => {
    return (
        <div className="plan">
            <div className="top-calender"> 
               <TopSheet />
            </div>
            <div className="center-plan">
               <WeekPlan />
            </div>
            <div className="bottom-bar">
                <Nav />
            </div>
            
        </div>
    )
}

export default Home;