import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../componets/comm/header";
import MoneyHistory from "../../componets/income-expend/money-history";

const CollectionDataHistory = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");

    console.log(type)
    return(
        <div>
          <Header text={`${type}`}/>
          <MoneyHistory/>
        </div>
    )
}

export default CollectionDataHistory;