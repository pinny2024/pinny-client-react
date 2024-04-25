import React, { useState } from "react";
import { Icon } from "@iconify/react";

import "../../../css/comm/index.css"
import styles from "../../../css/income-expend/dropdown.module.css"

const Dropdown = ({ handleCategorySelection }) => {
    const categories = ["식비", "교통수단", "문화생활", "금융", "기타", "저축"];
    const imgURL = ["food-gray-icon.svg", "car-gray-icon.svg", "music-gray-icon.svg", "money-gray-icon.svg", "etc-gray-icon.svg", "piggy-gray-icon.svg"];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div className={styles['container']}>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => {
                        setSelectedCategory((prev) => selectedCategory);
                        handleCategorySelection(categories[index], imgURL[index]);
                    }}>
                        <img src={`${process.env.PUBLIC_URL}/img/income-expend/${imgURL[index]}`} />
                        <p style={{ color: selectedCategory === category ? "rgb(0,0,0,0.87)" : "rgb(0,0,0,0.34)" }}>{category}</p>
                        {index === 0 && <Icon icon="uiw:sdown" className="input-data-icon" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;