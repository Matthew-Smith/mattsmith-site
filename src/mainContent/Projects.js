import React, { Component } from "react";

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
      <div>
        <MattSmithSite />
        <Deckitron />
        <ElectronCalc />
        <MenuSystem />
        <AtomGlowingCursor />
      </div>
    );
  }
}

export default Projects;
