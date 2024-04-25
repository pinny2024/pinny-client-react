    import React from "react";
    import CollectionDataBtn from "./collection-data-btn";

    import "../../../css/comm/index.css"
    import styels from "../../../css/income-expend/collection-data.module.css"

    const CollectionData = () => {
        return(
            <div className={styels['container']}>
                <CollectionDataBtn img="food-icon.svg" text="식비"/>
                <CollectionDataBtn img="car-icon.svg" text="교통수단"/>
                <CollectionDataBtn img="music-icon.svg" text="문화생활"/>
                <CollectionDataBtn img="money-icon.svg" text="금융"/>
                <CollectionDataBtn img="etc-icon.svg" text="기타"/>

            </div>
        )
    }

    export default CollectionData;