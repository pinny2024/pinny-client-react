import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../componets/comm/header";
import MoneyHistoryAttribute from "../../componets/income-expend/money-history-attribute";

const CollectionDataHistory = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");

    console.log(type)
    return(
        <div>
          <Header text={`${type}`}/>
        </div>
    )
}

export default CollectionDataHistory;