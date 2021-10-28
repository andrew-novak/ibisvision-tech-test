import React, { useContext } from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import useUserMedia from "../hooks/useUserMedia";
import GeneralContext from "../contexts/GeneralContext";
import CardTemplate from "../templates/CardTemplate";
import Container from "../components/Container";
import Text from "../components/Text";
import Slider from "../components/Slider";
import Camera from "../components/Camera";
import Button from "../components/Button";

const SliderScreen = () => {
  const { token } = useContext(GeneralContext);

  return (
    <CardTemplate token={token} maxWidth="1055px">
      <Text>
        You can change the position of the dot to the left or to the right. Drag
        the icon to change.
      </Text>
      <Slider fullWidth />
      <span style={{ height: "50px" }} />
      <div style={{ display: "flex", width: "100%" }}>
        <Camera width={310} />
        <span style={{ width: "62px" }} />
        <Slider fullWidth height="200px" />
      </div>
      <span style={{ height: "55px" }} />
      <Button height="40px" width="218px">
        NEXT
      </Button>
      <span style={{ height: "82px" }} />
    </CardTemplate>
  );
};

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
