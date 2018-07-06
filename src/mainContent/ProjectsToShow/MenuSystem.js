import React from "react";
import { connect } from "react-redux";
import { Card, Icon, Image, Button } from "semantic-ui-react";

import { showPopup } from "../../actions";

const tryItURL = "http://menusystem.mattsmith.site";
const screenshot =
  "https://raw.githubusercontent.com/Matthew-Smith/MenuSystem/master/screenshot.png";

const MenuSystem = ({ showPopup }) => {
  return (
    <Card fluid>
      <Image src={screenshot} className="cardHeader" />
      <Card.Content>
        <Card.Header>WebGL TV Menu System</Card.Header>
        <Card.Meta>March 2014</Card.Meta>
        <Card.Description>
          This is a demonstration of using 2d canvases as textures for
          displaying text in WebGL as well as being a basic WebGL menu
          controllable with the keyboard.
          <h3>Controls:</h3>
          <li>arrow keys - navigate left, right, up, down</li>
          <li>m - open and close the menu</li>
          <li>` - show and hide the background</li>
          <li>esc - close the menu</li>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          href={tryItURL}
          className="cardButton"
          onClick={event => {
            event.preventDefault();
            showPopup({
              URL: tryItURL,
              width: "1280px",
              height: "720px"
            });
          }}
        >
          <Button icon labelPosition="left" color="green">
            <Icon name="play" />Try it
          </Button>
        </a>
        <a
          href="https://github.com/Matthew-Smith/MenuSystem"
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

const mapDispatchToProps = dispatch => ({
  showPopup: popupData => {
    dispatch(showPopup(popupData));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(MenuSystem);
