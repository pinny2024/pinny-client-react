import React from "react";
import Header from "../../componets/income-expend/header";
import SelectBtn from "../../componets/income-expend/post/select-btn";
import InputData from "../../componets/income-expend/post/input-data";

const ExpendPost = () => {
    return(
        <div>
          <Header text="지출"/>
          <SelectBtn/>
          <InputData/>
        </div>
    )
}

export default ExpendPost;