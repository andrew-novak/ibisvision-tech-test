import React from "react";

import "./HelperText.css";

const HelperText = ({ children }) =>
  children ? (
    <p className="helper-text">{children}</p>
  ) : (
    <p className="helper-text">&nbsp;</p>
  );

export default HelperText;
