import React from "react";
import '../../../css/auth/sign-up/text/buttonoptions.css';

const ButtonOptions = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">{options.placeholder}</option>
      {options.values.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default ButtonOptions;
