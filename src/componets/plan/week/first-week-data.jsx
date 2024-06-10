// 예시: FirstWeek.js
import React, { useState } from "react";
import PlanGragh from "./plan-gragh-data";

const FirstWeek = () => {
    const [data, setData] = useState(/* 해당 주차의 데이터 */);

    return (
        <div>
            {/* 해당 주차의 데이터를 UI에 표시 */}
            <PlanGragh />
        </div>
    );
};

export default FirstWeek;
