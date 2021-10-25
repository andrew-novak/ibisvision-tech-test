import React from "react";

import "./Card.css";

const Card = ({ maxWidth, title, children }) => {
  const radius = title ? "16px" : "8px";
  return (
    <div className="card" style={{ maxWidth, borderRadius: radius }}>
      {title ? (
        <div className="card__text-header">{title}</div>
      ) : (
        <div className="card__slim-header" />
      )}

      <div
        className="card__body"
        style={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
