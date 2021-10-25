import React from "react";

import "./TextInput.css";

const TextInput = ({ fullWidth, icon, password }) => (
  <div
    className="text-input__container"
    style={{ ...(fullWidth ? { width: "100%" } : null) }}
  >
    {icon ? <img src={icon} className="text-input__icon" /> : null}
    <input className="text-input__input" />
  </div>
);

export default TextInput;
