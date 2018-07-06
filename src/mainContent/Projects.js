import React, { Component } from "react";
import { Card, Grid, Segment } from "semantic-ui-react";

import AtomGlowingCursor from "./ProjectsToShow/AtomGlowingCursor";
import Deckitron from "./ProjectsToShow/Deckitron";
import ElectronCalc from "./ProjectsToShow/ElectronCalc";
import MattSmithSite from "./ProjectsToShow/MattSmithSite";
import MenuSystem from "./ProjectsToShow/MenuSystem";

import "./styles/Projects.css";
import "./styles/mainContent.css";

class Projects extends Component {
  render() {
    return (
      <Segment vertical>
        <Grid container verticalAlign="middle">
          <Grid.Column>
            <Card.Group>
              <MattSmithSite />
              <Deckitron />
              <ElectronCalc />
              <MenuSystem />
              <AtomGlowingCursor />
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Projects;
