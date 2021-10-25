import React from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import CardTemplate from "../templates/CardTemplate";
import Container from "../components/Container";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import companyLogo from "../assets/company-logo.png";
import personIcon from "../assets/person-icon.png";
import lockIcon from "../assets/lock-icon.png";

const AuthRoot = ({}) => (
  <CardTemplate>
    <Container center maxWidth="600px">
      <span style={{ height: "60px" }} />
      <img src={companyLogo} style={{ height: "151px" }} />
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

export default AuthRoot;
