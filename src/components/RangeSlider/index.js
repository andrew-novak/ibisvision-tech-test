import React from "react";

import "./RangeSlider.css";

const RangeSlider = ({
  passRef,
  onChange,
  value,
  untouchable,
  fullWidth,
  height,
  borderColor
}) => (
  <input
    type="range"
    min="0"
    max="100"
    ref={passRef}
    onChange={onChange}
    value={value}
    className={untouchable ? "untouchable-slider" : "slider"}
    style={{
      ...(fullWidth ? { width: "100%" } : null),
      ...(height ? { height } : null),
      ...(borderColor ? { borderColor } : null)
    }}
  />
);

export default RangeSlider;
