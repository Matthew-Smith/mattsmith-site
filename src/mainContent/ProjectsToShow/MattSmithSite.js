import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

const MattSmithSite = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>This Website - Built with React</Card.Header>
        <Card.Meta>June 2018</Card.Meta>
        <Card.Description>
          This Website was built primarily with the purpose of learning React
          and Redux. It is hosted on Amazon AWS S3 while the Deckitron Sample
          Project is hosted by AWS EC2. The Domain was purchsed through Google
          Domains and the DNS is set up there.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          href="https://github.com/Matthew-Smith/mattsmith-site"
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

export default MattSmithSite;
