import React, { useState } from "react";

import "./App.css";
import GeneralContext from "./contexts/GeneralContext";
import AuthScreen from "./screens/AuthScreen";
import SliderScreen from "./screens/SliderScreen";
import ResultScreen from "./screens/ResultScreen";

const App = () => {
  const [screen, setScreen] = useState("auth");
  const [token, setToken] = useState("");
  const [thinSliderDistance, setThinSliderDistance] = useState(null);
  const [wideSliderDistance, setWideSliderDistance] = useState(null);

  const contextValue = {
    screen,
    setScreen,
    token,
    setToken,
    thinSliderDistance,
    setThinSliderDistance,
    wideSliderDistance,
    setWideSliderDistance
  };

  const content = () => {
    if (screen === "auth") return <AuthScreen />;
    if (screen === "slider") return <SliderScreen />;
    if (screen === "result") return <ResultScreen />;
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {content()}
    </GeneralContext.Provider>
  );
};

export default App;
