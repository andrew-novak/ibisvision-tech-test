import React, { useState, useContext } from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import GeneralContext from "../contexts/GeneralContext";
import CardTemplate from "../templates/CardTemplate";
import Container from "../components/Container";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import HelperText from "../components/HelperText";
import companyLogo from "../assets/company-logo.png";
import personIcon from "../assets/person-icon.png";
import lockIcon from "../assets/lock-icon.png";

const AuthRoot = ({}) => {
  const breakpoints = useBreakpoints();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [generalHelper, setGeneralHelper] = useState("");
  const [usernameHelper, setUsernameHelper] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");

  const { setScreen, setToken } = useContext(GeneralContext);

  const login = async () => {
    const url = "https://api.ibisvision.co.uk/api-token-auth/";
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    };
    const response = await fetch(url, options);
    const body = await response.json();
    if (!response.ok) {
      setUsernameHelper(body.username ? body.username : null);
      setPasswordHelper(body.password ? body.password : null);
      setGeneralHelper(body.non_field_errors ? body.non_field_errors : null);
    } else {
      setToken(body.token);
      setScreen("slider");
    }
  };

  return (
    <CardTemplate maxWidth="768px" innerMaxWidth="536px">
      <span style={{ height: "56px" }} />
      <img src={companyLogo} style={{ height: "132px", userSelect: "none" }} />
      <span style={{ height: "53px" }} />
      <TextInput
        fullWidth
        icon={personIcon}
        onChange={event => setUsername(event.target.value)}
        helperText={usernameHelper}
      />
      <span style={{ height: "8px" }} />
      <TextInput
        fullWidth
        password
        icon={lockIcon}
        onChange={event => setPassword(event.target.value)}
        helperText={passwordHelper}
      />
      <span style={{ height: "76px" }} />
      <Button fullWidth onClick={login}>
        LOGIN
      </Button>
      <HelperText>{generalHelper}</HelperText>
      <span style={{ height: breakpoints.down.sm ? "0px" : "70px" }} />
    </CardTemplate>
  );
};

export default AuthRoot;
