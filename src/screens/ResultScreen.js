import React from "react";

import Root from "../components/Root";
import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";

const ResultScreen = () => (
  <Root sideMargin="10px">
    <Card title="Token: 2fdwfw" maxWidth="840px">
      <Container maxWith={10}>
        <Button>End Session</Button>
      </Container>
    </Card>
  </Root>
);

export default ResultScreen;
