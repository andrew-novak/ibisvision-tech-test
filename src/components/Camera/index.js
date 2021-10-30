import React, {
  createRef,
  useState,
  useEffect,
  useImperativeHandle
} from "react";

import "./Camera.css";

const Camera = ({ width }) => {
  const videoRef = createRef();
  const [stream, setStream] = useState(null);

  const height = width / 1.5;

  const handleError = error => {
    console.error(error);
  };

  const initCameraStream = (stream, setStream) => {
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    const constrains = { video: true };
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constrains)
        .then(stream => {
          setStream(stream);
        })
        .catch(err => {
          handleError(err);
        });
    } else {
      const getWebcam =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (getWebcam) {
        getWebcam(
          constrains,
          stream => setStream(stream),
          err => handleError(err)
        );
      } else {
        console.error("Camera not supported");
      }
    }
  };

  useEffect(() => initCameraStream(stream, setStream), []);

  useEffect(() => {
    if (stream && videoRef && videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = e => {
        videoRef.current.play();
      };
    }
    return () => {
      if (stream) {
        stream.getrTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, [stream]);

  return (
    <video
      src={stream}
      autoPlay={true}
      ref={videoRef}
      className="camera"
      style={{ height, width }}
      height={height}
      width={width}
    />
  );
};

export default Camera;
