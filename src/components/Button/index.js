import React from "react";

import "./Button.css";

const Button = ({ onClick, fullWidth, width, height, children }) => {
  const customWidth = fullWidth || width ? (fullWidth ? "100%" : width) : null;
  return (
    <button
      className="button"
      onClick={onClick}
      style={{
        ...(customWidth ? { width: customWidth } : null),
        ...(height ? { height } : null)
      }}
    >
      {children}
    </button>
  );
};

export default Button;
