import React, { useRef } from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import useUserMedia from "../hooks/useUserMedia";
import CardTemplate from "../templates/CardTemplate";
import Slider from "../components/Slider";
import Button from "../components/Button";

const SliderScreen = () => (
  <CardTemplate title="Token: 43fdf">
    <Slider />
    <Slider />
    <Button>NEXT</Button>
  </CardTemplate>
);

/*
const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" }
};


const videoRef = useRef();
const mediaStream = useUserMedia(CAPTURE_OPTIONS);

if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
  videoRef.current.srcObject = mediaStream;
}

const handleCanPlay = () => videoRef.current.play();


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
*/

export default SliderScreen;
