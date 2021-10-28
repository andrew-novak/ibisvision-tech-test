import React from "react";

import useBreakpoints from "../hooks/useBreakpoints";
import Root from "../components/Root";
import Header from "../components/Header";
import Card from "../components/Card";
import Container from "../components/Container";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const CardTemplate = ({ token, maxWidth, innerMaxWidth, children }) => {
  const breakpoints = useBreakpoints();

  const title = token ? `Token: ${token}` : null;

  // Provides padding between content and screen border on small screens, and minimal in-card padding on larger screens
  const defaultInnerMaxWidth = `calc(100% - 20px)`;

  if (breakpoints.down.sm) {
    return (
      <Root>
        <Header title={title} />
        <Container center maxWidth={defaultInnerMaxWidth}>
          <Container center maxWidth={innerMaxWidth}>
            {children}
          </Container>
        </Container>
      </Root>
    );
  }

  return (
    <Root>
      <Container center maxWidth={maxWidth}>
        <span style={{ height: "40px" }} />
        <Container center maxWidth={defaultInnerMaxWidth}>
          <Card title={title}>
            <Container center maxWidth={innerMaxWidth}>
              {children}
            </Container>
          </Card>
        </Container>
      </Container>
    </Root>
  );
};

export default CardTemplate;
