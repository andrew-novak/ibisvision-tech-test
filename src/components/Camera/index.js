import React, { createRef, useEffect } from "react";

import "./Camera.css";

const Camera = ({ width }) => {
  const height = width / 1.5;

  const ref = createRef();

  const getMedia = async () => {
    if (
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia &&
      ref.current
    ) {
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
      } catch (err) {
        /* error  handleing */
      }
      if (ref.current) {
        ref.current.srcObject = stream;
      }
    }
  };

  useEffect(() => {
    getMedia();
    navigator.mediaDevices.ondevicechange = getMedia;
  }, []);

  return (
    <video
      autoPlay={true}
      ref={ref}
      className="camera"
      style={{ height, width }}
    />
  );
};

export default Camera;
