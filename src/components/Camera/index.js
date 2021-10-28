import React, { createRef, useEffect } from "react";

import "./Camera.css";

const Camera = ({ width }) => {
  const height = width / 1.5;

  const ref = createRef();

  let stream = null;

  const getMedia = async () => {
    if (
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia &&
      ref.current
    ) {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
      } catch (err) {
        /* error  handling */
      }
      if (ref.current) {
        ref.current.srcObject = stream;
      }
    }
  };

  useEffect(() => {
    getMedia();
    navigator.mediaDevices.ondevicechange = getMedia;
    return async () => {
      const tracks = await stream.getTracks();
      tracks.forEach(track => {
        track.stop();
        const attachedElements = track.detach();
        attachedElements.forEach(element => element.remove());
        ref.current.srcObject = null;
      });
    };
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
