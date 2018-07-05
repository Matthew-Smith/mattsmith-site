import React from "react";
import { connect } from "react-redux";

import { showPopup } from "../../actions";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const tryItURL = "http://deckitron.mattsmith.site";
const screenshot =
  "https://raw.githubusercontent.com/Matthew-Smith/deckitron/master/docs/screenshot.png";

const Deckitron = ({ showPopup }) => {
  return (
    <Card fluid>
      <Image src={screenshot} />
      <Card.Content>
        <Card.Header>Deckitron - Magic The Gathering Deck Building</Card.Header>
        <Card.Meta>November 2016</Card.Meta>
        <Card.Description>
          Over the course of 48 hours, our 4 person team built a web app was
          using NodeJS, Angular, Express, and MongoDB for a “Magic the
          Gathering” collaborative deck building application. The application
          uses websockets for chat and sharing/linking cards, as well as a NoSQL
          database for storing card lists to specific URLs.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>
          <b>Note</b>: after selecting your deck name there is a bug where the
          cards will not show up the first time. Please close the page and open
          it again.
        </Card.Description>
        <a
          href={tryItURL}
          className="cardButton"
          onClick={event => {
            event.preventDefault();
            showPopup({
              URL: tryItURL,
              width: "90%",
              height: "90%"
            });
          }}
        >
          <Button icon labelPosition="left" color="green">
            <Icon name="play" />Try it
          </Button>
        </a>
        <a href="https://github.com/deckitron/deckitron" className="cardButton">
          <Button icon labelPosition="left" color="orange">
            <Icon name="github" />See it on GitHub
          </Button>
        </a>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  showPopup: popupData => {
    dispatch(showPopup(popupData));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(Deckitron);
