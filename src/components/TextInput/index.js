import React, { useRef } from "react";

import "./TextInput.css";

const TextInput = ({ fullWidth, icon, password, helperText, onChange }) => {
  const ref = React.createRef();
  const focus = () => ref.current.focus();
  return (
    <div className="text-input__root">
      <div
        className="text-input__container"
        style={{ ...(fullWidth ? { width: "100%" } : null) }}
        onClick={focus}
      >
        {icon ? (
          <div className="text-input__icon-container">
            <img src={icon} draggable={false} className="text-input__icon" />
          </div>
        ) : null}
        <input
          ref={ref}
          type={password ? "password" : null}
          className="text-input__input"
          onChange={onChange}
        />
      </div>
      {helperText ? (
        <p className="text-input__helper-text">{helperText}</p>
      ) : (
        <p className="text-input__helper-text">&nbsp;</p>
      )}
    </div>
  );
};

// <p>{helperText ? helperText : " &nbsp;"}</p>

export default TextInput;
