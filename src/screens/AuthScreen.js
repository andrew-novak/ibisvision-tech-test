import React from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";
import Root from "../components/Root";
import Card from "../components/Card";
import Container from "../components/Container";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import companyLogo from "../assets/company-logo.png";
import personIcon from "../assets/person-icon.png";
import lockIcon from "../assets/lock-icon.png";

const AuthScreen = ({ windowDimensions }) => {
  const { width: windowWidth } = useWindowDimensions();
  console.log(`Window Width: ${windowWidth}`);
  const isSmall = windowWidth < 600;
  console.log(`Is Small: ${windowWidth > 600}`);

  const content = (
    <Container alignItems="center" maxWidth="600px">
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
  );

  return (
    <Root sideMargin="10px">
      {isSmall ? content : <Card maxWidth="840px">{content}</Card>}
    </Root>
  );
};

export default AuthScreen;
