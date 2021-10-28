import React, { useContext } from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import GeneralContext from "../contexts/GeneralContext";
import CardTemplate from "../templates/CardTemplate";
import Camera from "../components/Camera";
import Text from "../components/Text";
import Button from "../components/Button";

const ResultScreen = () => {
  const breakpoints = useBreakpoints();

  const {
    setScreen,
    token,
    setToken,
    thinSliderDistance,
    wideSliderDistance
  } = useContext(GeneralContext);

  const logout = () => {
    setToken("");
    setScreen("auth");
  };

  const cameraWidth = breakpoints.down.sm ? 350 : 510;
  const buttonShrink = 40;
  const sizeMultiplier = breakpoints.down.md ? 0.5 : 1;

  return (
    <CardTemplate token={token} maxWidth="1418px" innerMaxWidth="1240px">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: breakpoints.down.md ? "column" : "row",
          marginTop: `${90 * sizeMultiplier}px`,
          width: "100%"
        }}
      >
        <Camera width={cameraWidth} />
        {breakpoints.down.md ? (
          <span style={{ height: `${94 * sizeMultiplier}px` }} />
        ) : null}
        <span style={{ flexShrink: 0, width: "74px" }} />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Text contained>
            Distance from the beginning of the slider and the circle:{" "}
            {thinSliderDistance}px
          </Text>
          <span style={{ height: `${30 * sizeMultiplier}px` }} />
          <Text contained>
            Distance from the beginning of the smaller container and the circle:{" "}
            {wideSliderDistance}px
          </Text>
        </div>
      </div>
      <span style={{ height: `${94 * sizeMultiplier}px` }} />
      {breakpoints.down.md ? (
        <Button width={cameraWidth - buttonShrink} onClick={logout}>
          End Session
        </Button>
      ) : (
        <div style={{ marginLeft: buttonShrink, width: "100%" }}>
          <Button width={cameraWidth - buttonShrink} onClick={logout}>
            End Session
          </Button>
        </div>
      )}
      <span
        style={{
          height: breakpoints.down.sm ? "0px" : `${130 * sizeMultiplier}px`
        }}
      />
    </CardTemplate>
  );
};

export default ResultScreen;
