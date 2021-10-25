import React from "react";

import "./Root.css";

const Root = ({ sideMargin, children }) => {
  console.log(`sideMargin: ${sideMargin}`);
  return (
    <div
      className="root"
      style={{ paddingLeft: sideMargin, paddingRight: sideMargin }}
    >
      {children}
    </div>
  );
};

export default Root;
