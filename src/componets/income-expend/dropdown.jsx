import { useRef, useEffect } from "react";

import "../../css/comm/index.css"
import "../../css/income-expend/dropdown.css"

const Dropdown = ({ handleCategorySelection }) => {
    const categories = ["식비", "교통수단", "문화생활", "금융", "기타", "저축"];
    const imgURL = ["food-gray-icon.svg", "car-gray-icon.svg", "music-gray-icon.svg", "money-gray-icon.svg", "etc-gray-icon.svg", "piggy-gray-icon.svg"];

    return (
        <div className="dropdown-container">
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => handleCategorySelection(category, imgURL[index])}>
                        <img src={`${process.env.PUBLIC_URL}/img/income-expend/${imgURL[index]}`} />
                        <p>{category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;