import React from "react";

import "./Container.css";

const Container = ({ alignItems, maxWidth, children }) => (
  <div className="container" style={{ alignItems, maxWidth }}>
    {children}
  </div>
);

export default Container;
