import React from "react";

import "./Text.css";

const Text = ({ contained, left, children }) => (
  <div
    className="text__root"
    style={{ ...(left ? { alignItems: left } : null) }}
  >
    {contained ? (
      <div className="text__container">
        <p>{children}</p>
      </div>
    ) : (
      <p>{children}</p>
    )}
  </div>
);

export default Text;
