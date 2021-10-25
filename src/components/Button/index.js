import React from "react";

import "./Button.css";

const Button = ({ fullWidth, children }) => (
  <button
    className="button"
    style={{ ...(fullWidth ? { width: "100%" } : null) }}
  >
    {children}
  </button>
);

export default Button;
