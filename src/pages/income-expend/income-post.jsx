import React from "react";
import Header from "../../componets/comm/header";
import SelectBtn from "../../componets/income-expend/post/select-btn";
import InputData from "../../componets/income-expend/post/input-data";

const ExpendPost = () => {
    return(
        <div>
          <Header text="계획 세우기!"/>
          <SelectBtn/>
          <InputData/>
        </div>
    )
}

export default ExpendPost;