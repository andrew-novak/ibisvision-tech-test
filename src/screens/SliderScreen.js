import React, { useRef } from "react";

import useUserMedia from "../hooks/useUserMedia";
import Root from "../components/Root";
import Container from "../components/Container";
import Card from "../components/Card";
import Slider from "../components/Slider";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" }
};

const SliderScreen = () => {
  const videoRef = useRef();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleCanPlay = () => videoRef.current.play();

  return (
    <Root sideMargin="10px">
      <Card title="Token: 2fdsf3" maxWidth="840px">
        <Container>
          <Slider />
          <video
            ref={videoRef}
            onCanPlay={handleCanPlay}
            autoPlay
            style={{
              backgroundColor: "black",
              width: "100px",
              height: "100px"
            }}
          />
          <Slider />
        </Container>
      </Card>
    </Root>
  );
};

export default SliderScreen;
