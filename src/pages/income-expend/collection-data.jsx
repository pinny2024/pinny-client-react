import React from "react";
import ListAttributes from "../../componets/income-expend/post/list-attributes"
import CollecionData from "../../componets/income-expend/collection/collection-data"
import PostBtn from "../../componets/income-expend/post/post-btn";
import Nav from "../../componets/comm/nav";

const CollectionData = () => {
    return (
        <>
            <ListAttributes />
            <CollecionData />
            <PostBtn/>
            <Nav/>
        </>
    )
}

export default CollectionData;