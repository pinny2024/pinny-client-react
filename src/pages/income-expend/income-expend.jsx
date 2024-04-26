import React from "react";
import ListAttributes from "../../componets/income-expend/post/list-attributes"
import PostBtn from "../../componets/income-expend/post/post-btn";
import DataNone from "../../componets/income-expend/money-history/data-none";
import MoneyHistoryAttribute from "../../componets/income-expend/money-history/money-history";
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