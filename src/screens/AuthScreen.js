import React, { useState, useContext } from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import GeneralContext from "../contexts/GeneralContext";
import CardTemplate from "../templates/CardTemplate";
import Container from "../components/Container";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import companyLogo from "../assets/company-logo.png";
import personIcon from "../assets/person-icon.png";
import lockIcon from "../assets/lock-icon.png";

const AuthRoot = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [generalHelper, setGeneralHelper] = useState("");
  const [usernameHelper, setUsernameHelper] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");

  const { setToken } = useContext(GeneralContext);

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
      if (body.username) setUsernameHelper(body.username);
      if (body.password) setPasswordHelper(body.password);
      if (body.non_field_errors) setGeneralHelper(body.non_field_errors);
    } else {
      setToken(body.token);
    }
  };

  return (
    <CardTemplate maxWidth="768px" innerMaxWidth="536px">
      <span style={{ height: "56px" }} />
      <img src={companyLogo} style={{ height: "132px", userSelect: "none" }} />
      <span style={{ height: "51px" }} />
      <TextInput
        fullWidth
        icon={personIcon}
        onChange={event => setUsername(event.target.value)}
        helperText={usernameHelper}
      />
      <span style={{ height: "8px" }} />
      <TextInput
        fullWidth
        icon={lockIcon}
        onChange={event => setPassword(event.target.value)}
        helperText={passwordHelper}
      />
      <span style={{ height: "76px" }} />
      <Button fullWidth onClick={login}>
        LOGIN
      </Button>
      <span style={{ height: "92px" }} />
    </CardTemplate>
  );
};

/*
const AuthRoot = ({}) => (
  <CardTemplate maxWidth="860px">
    <Container center maxWidth="600px">
      <span style={{ height: "60px" }} />
      <img src={companyLogo} style={{ height: "151px", userSelect: "none" }} />
      <span style={{ height: "55px" }} />
      <TextInput fullWidth icon={personIcon} />
      <span style={{ height: "36px" }} />
      <TextInput fullWidth icon={lockIcon} />
      <span style={{ height: "114px" }} />
      <Button fullWidth>LOGIN</Button>
      <span style={{ height: "103px" }} />
    </Container>
  </CardTemplate>
);
*/

export default AuthRoot;
