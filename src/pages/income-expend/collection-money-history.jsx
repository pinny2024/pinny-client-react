import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../componets/comm/header";
import MoneyHistory from "../../componets/income-expend/collection/money-history";

const CollectionDataHistory = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("type");

    return(
        <div>
          <Header text={category}/>
          <MoneyHistory category={category}/>
        </div>
    )
}

export default CollectionDataHistory;