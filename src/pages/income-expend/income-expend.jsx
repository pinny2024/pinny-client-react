import React from "react";
import ListAttributes from "../../componets/income-expend/list-attributes"
import PostBtn from "../../componets/income-expend/post-btn";
import DataNone from "../../componets/income-expend/data-none";
import MoneyHistoryAttribute from "../../componets/income-expend/money-history-attribute";
import Nav  from "../../componets/comm/nav";

const IncomeExpend = () => {
    return(
        <div>
            <ListAttributes/>
            <PostBtn/>
            {/* <DataNone/> */}
            <MoneyHistoryAttribute/>
            <Nav/>
        </div>
    )
}

export default IncomeExpend;