import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

const screenshot =
  "https://media.githubusercontent.com/media/Matthew-Smith/electronCalc/master/screenshot.png";

class ElectronCalc extends Component {
  render() {
    return (
      <ProjectCard
        headerText="Simple Electron Calculator App"
        anchorName="ElectronCalculator"
      >
        <img src={screenshot} alt="Example" className="mainImage" />
        View it on{" "}
        <a href="ttps://github.com/Matthew-Smith/electronCalc">Github</a>
        <br />
        <br />
        Created a simple calculator to learn about electron. Has a history
        window that communicates back and forth using IPC.
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </ProjectCard>
    );
  }
}

export default ElectronCalc;
