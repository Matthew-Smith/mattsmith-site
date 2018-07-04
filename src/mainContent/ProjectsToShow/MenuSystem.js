import React from "react";
import { connect } from "react-redux";

import { showPopup } from "../../actions";
import ProjectCard from "./ProjectCard";

const tryItURL = "http://menusystem.mattsmith.site";
const screenshot =
  "https://raw.githubusercontent.com/Matthew-Smith/MenuSystem/master/screenshot.png";

const MenuSystem = ({ showPopup }) => {
  return (
    <ProjectCard headerText="WebGL TV Menu System" anchorName="MenuSystem">
      <img src={screenshot} alt="Screenshot" className="mainImage" />
      <h2>
        <a
          href={tryItURL}
          onClick={event => {
            event.preventDefault();
            showPopup({
              URL: tryItURL,
              width: "1280px",
              height: "720px"
            });
          }}
        >
          Try it out{" "}
        </a>
      </h2>
      <br />
      View it on{" "}
      <a href="https://github.com/Matthew-Smith/MenuSystem">Github</a>
      <br />
      <br />
      This is a demonstration of using 2d canvases as textures for displaying
      text in WebGL as well as being a basic WebGL menu controllable with the
      keyboard.
      <h3>Controls:</h3>
      <li>arrow keys - navigate left, right, up, down</li>
      <li>m - open and close the menu</li>
      <li>` - show and hide the background</li>
      <li>esc - close the menu</li>
    </ProjectCard>
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
