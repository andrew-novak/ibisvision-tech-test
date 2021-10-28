import React, { createRef, useState, useEffect } from "react";

import "./Slider.css";

const Slider = ({ fullWidth, height }) => {
  //let offsetX, offsetY;
  const ref = createRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null);

  const onMouseDown = event => {
    if (event.button !== 0) return;
    setDragging(true);
    const el = event.target;
    const offsetX = event.clientX - el.getBoundingClientRect().left;
    const offsetY = event.clientY - el.getBoundingClientRect().right;
    setRel({
      x: event.pageX - offsetX,
      y: event.pageY - offsetY
    });
    /*
    const pos = ref.current.offset();
    console.log(`pos offset: ${pos}`);
    setRel({
      x: event.pageX - pos.left,
      y: event.pageY - pos.top
    });
    */
    event.stopPropagation();
    event.preventDefault();
  };

  const onMouseMove = event => {
    if (!dragging) return;
    setPosition({
      x: event.pageX - rel.x,
      y: event.pageY - rel.y
    });
    event.stopPropagation();
    event.preventDefault();
  };

  const onMouseUp = event => {
    setDragging(false);
    event.stopPropagation();
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  /*
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
  */

  return (
    <div
      className="slider"
      style={{
        ...(fullWidth ? { width: "100%" } : null),
        ...(height ? { height } : null)
      }}
    >
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        className="slider__dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default Slider;
