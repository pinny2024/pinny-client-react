import React from "react";
import ListAttributes from "../componets/income-expend/list-attributes"
import PostBtn from "../componets/income-expend/post-btn";
import Nav  from "../componets/comm/nav";

const IncomeExpend = () => {
    return(
        <div>
            <ListAttributes/>
            <PostBtn/>
            <Nav/>
        </div>
    )
}

export default IncomeExpend;