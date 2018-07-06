import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const screenshot =
  "https://media.githubusercontent.com/media/Matthew-Smith/electronCalc/master/screenshot.png";

const ElectronCalc = () => {
  return (
    <Card fluid>
      <Image src={screenshot} className="cardHeader" />
      <Card.Content>
        <Card.Header>Simple Electron Calculator App</Card.Header>
        <Card.Meta>June 2018</Card.Meta>
        <Card.Description>
          Created a simple calculator to learn about electron. Has a history
          window that communicates back and forth using IPC.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          href="https://github.com/Matthew-Smith/electronCalc"
          className="cardButton"
        >
          <Button icon labelPosition="left" color="orange">
            <Icon name="github" />See it on GitHub
          </Button>
        </a>
      </Card.Content>
    </Card>
  );
};

export default ElectronCalc;
