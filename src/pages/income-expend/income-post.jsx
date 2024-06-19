import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../componets/income-expend/header";
import SelectBtn from "../../componets/income-expend/post/select-btn";
import InputData from "../../componets/income-expend/post/input-data";

const ExpendPost = () => {
  const location = useLocation();
  return (

    <div>
      <Header text="수입" />
      <SelectBtn />
      <InputData />
    </div>
  )
}

export default ExpendPost;