import React from "react";

import "./Header.css";

const Header = ({ title }) =>
  title ? (
    <div className="text-header">{title}</div>
  ) : (
    <div className="slim-header" />
  );

export default Header;
