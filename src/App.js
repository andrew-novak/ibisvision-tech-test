import React, { useState } from "react";

import "./App.css";
import AuthScreen from "./screens/AuthScreen";
import SliderScreen from "./screens/SliderScreen";
import ResultScreen from "./screens/ResultScreen";

const App = () => {
  const [screen, setSreen] = useState("auth");
  const content = () => {
    if (screen === "auth") return <AuthScreen />;
    if (screen === "slider") return <SliderScreen />;
    if (screen === "result") return <ResultScreen />;
  };
  return (
    <div>
      <div style={{ position: "absolute", zIndex: 2 }}>
        <button onClick={() => setSreen("auth")}>Auth</button>
        <button onClick={() => setSreen("slider")}>Slider</button>
        <button onClick={() => setSreen("result")}>Result</button>
      </div>
      {content()}
    </div>
  );
};

export default App;
