import React, { useContext } from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import GeneralContext from "../contexts/GeneralContext";
import CardTemplate from "../templates/CardTemplate";
import Camera from "../components/Camera";
import Text from "../components/Text";
import Button from "../components/Button";

const ResultScreen = () => {
  const breakpoints = useBreakpoints();

  const { token } = useContext(GeneralContext);

  const cameraWidth = breakpoints.down.sm ? 400 : 510;
  const buttonShrink = 40;
  return (
    <CardTemplate token={token} maxWidth="1418px" innerMaxWidth="1240px">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: breakpoints.down.md ? "column" : "row",
          marginTop: "90px",
          width: "100%"
        }}
      >
        <Camera width={cameraWidth} />
        {breakpoints.down.md ? <span style={{ height: "94px" }} /> : null}
        <span style={{ flexShrink: 0, width: "74px" }} />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Text contained>
            Distance from the beginning of the slider and the circle: 45px
          </Text>
          <span style={{ height: "30px" }} />
          <Text contained>
            Distance from the beginning of the smaller container and the circle:
            22px
          </Text>
        </div>
      </div>
      <span style={{ height: "94px" }} />
      {breakpoints.down.md ? (
        <Button width={cameraWidth - buttonShrink}>End Session</Button>
      ) : (
        <div style={{ marginLeft: buttonShrink, width: "100%" }}>
          <Button width={cameraWidth - buttonShrink}>End Session</Button>
        </div>
      )}
      <span style={{ height: "130px" }} />
    </CardTemplate>
  );
};

/*
<div
  style={{
    display: "flex",
    flexDirection: breakpoints.down.md ? "column" : "row",
    width: "100%"
  }}
>
  <div
    style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    <Camera width={cameraWidth} />
    <Button width={cameraWidth - 40}>End Session</Button>
  </div>
  <div
    style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    <Text contained>
      Distance from the beginning of the slider and the circle: 45px
    </Text>
    <Text contained>
      Distance from the beginning of the smaller container and the circle:
      22px
    </Text>
  </div>
</div>
*/

export default ResultScreen;
