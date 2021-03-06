import React, { useContext, useState, createRef } from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import useUserMedia from "../hooks/useUserMedia";
import GeneralContext from "../contexts/GeneralContext";
import CardTemplate from "../templates/CardTemplate";
import Container from "../components/Container";
import Text from "../components/Text";
import RangeSlider from "../components/RangeSlider";
import Camera from "../components/Camera";
import Button from "../components/Button";

const SliderScreen = () => {
  const breakpoints = useBreakpoints();
  const {
    setScreen,
    token,
    setThinSliderDistance,
    setWideSliderDistance
  } = useContext(GeneralContext);
  const [value, setValue] = useState(0);
  const thinSliderRef = createRef();
  const wideSliderRef = createRef();

  const handleSliderChange = event => {
    setValue(event.target.value);
  };

  const getResults = () => {
    const thin = thinSliderRef.current;
    const wide = wideSliderRef.current;
    const thinOff = parseInt((thin.offsetWidth * thin.value) / 100);
    const wideOff = parseInt((wide.offsetWidth * wide.value) / 100);
    setThinSliderDistance(thinOff);
    setWideSliderDistance(wideOff);
    setScreen("result");
  };

  const shrinkMultiplier = 0.5;
  const cameraWidth = breakpoints.down.md ? 310 * shrinkMultiplier : 310;
  const sliderHeight = breakpoints.down.md ? 342 * shrinkMultiplier : 342;

  return (
    <CardTemplate token={token} maxWidth="1055px">
      <Text>
        You can change the position of the dot to the left or to the right. Drag
        the icon to change.
      </Text>
      <RangeSlider
        passRef={thinSliderRef}
        onChange={handleSliderChange}
        value={value}
        fullWidth
      />
      <span style={{ height: "66px" }} />
      <div style={{ display: "flex", width: "100%" }}>
        <Camera width={cameraWidth} />
        <span style={{ width: breakpoints.down.sm ? "20px" : "62px" }} />
        <RangeSlider
          passRef={wideSliderRef}
          value={value}
          untouchable={true}
          fullWidth
          height={`${sliderHeight}px`}
          borderColor="#fbb400"
        />
      </div>
      <span style={{ height: "60px" }} />
      <Button height="40px" width="218px" onClick={getResults}>
        NEXT
      </Button>
      <span style={{ height: breakpoints.down.sm ? "0px" : "80px" }} />
    </CardTemplate>
  );
};

export default SliderScreen;
