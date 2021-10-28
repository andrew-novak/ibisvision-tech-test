import { createContext } from "react";

const GeneralContext = createContext({
  token: "",
  setToken: () => {}
});

export default GeneralContext;
