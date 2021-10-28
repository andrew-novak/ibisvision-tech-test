import React, { useState, useEffect } from "react";

import "./Slider.css";

const Slider = ({ fullWidth, height }) => {
  let offsetX, offsetY;
  /*
  const [isDraggable, setIsDraggable] = useState(false);

  const handlePointerDown = event => {
    setIsDraggable(true);
    onPointer(event);
  };

  const handlePointerMove = event => {
    if (isDraggable) onDragMove(event);
    onPointerMove(event);
  };

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUpp)
  }, []);
  */

  const move = event => {
    const el = event.target;
    el.style.left = `${event.pageX - offsetX}px`;
    el.style.to = `${event.pageY - offsetY}px`;
  };

  const add = event => {
    const el = event.target;
    offsetX = event.clientX - el.getBoundingClientRect().left;
    offsetY = event.clientY - el.getBoundingClientRect().right;
    el.addEventListener("mousemove", move);
  };

  const remove = event => {
    const el = event.target;
    el.removeEventListener("mousemove", move);
  };

  return (
    <div
      className="slider"
      style={{
        ...(fullWidth ? { width: "100%" } : null),
        ...(height ? { height } : null)
      }}
    >
      <div onMouseDown={add} onMouseUp={remove} className="slider__dot" />
    </div>
  );
};

export default Slider;
