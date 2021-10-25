import React from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import Root from "../components/Root";
import Header from "../components/Header";
import Card from "../components/Card";
import Container from "../components/Container";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const CardTemplate = ({ title, children }) => {
  const breakpoints = useBreakpoints();

  if (breakpoints.down.sm) {
    return (
      <Root>
        <Header title={title} />
        <Container center maxWidth="calc(100% - 20px)">
          {children}
        </Container>
      </Root>
    );
  }

  return (
    <Root>
      <Container center maxWidth="860px">
        <span style={{ height: "40px" }} />
        <Container center maxWidth="calc(100% - 20px)">
          <Card title={title}>{children}</Card>
        </Container>
      </Container>
    </Root>
  );
};

export default CardTemplate;
