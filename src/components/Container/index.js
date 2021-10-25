import React from "react";

import "./Container.css";

const Container = ({ maxWidth, children }) => (
  <div className="container" style={{ maxWidth }}>
    {children}
  </div>
);

export default Container;
