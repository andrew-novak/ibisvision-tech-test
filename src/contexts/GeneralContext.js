import { createContext } from "react";

const GeneralContext = createContext({
  screen: "auth",
  setScreen: () => {},
  token: "",
  setToken: () => {},
  thinSliderDistance: null,
  setThinSliderDistance: () => {},
  wideSliderDistance: null,
  setWideSliderDistance: () => {}
});

export default GeneralContext;
