import React from "react";
import { connect } from "react-redux";

import { showPopup } from "../../actions";
import ProjectCard from "./ProjectCard";

const tryItURL = "http://deckitron.mattsmith.site";
const screenshot =
  "https://raw.githubusercontent.com/Matthew-Smith/deckitron/master/docs/screenshot.png";

const Deckitron = ({ showPopup }) => {
  return (
    <ProjectCard
      headerText="Deckitron - Magic The Gathering Deck Building"
      anchorName="Deckitron"
    >
      <img src={screenshot} alt="Screenshot" className="mainImage" />
      <h2>
        <a
          href={tryItURL}
          onClick={event => {
            event.preventDefault();
            showPopup({
              URL: tryItURL,
              width: "90%",
              height: "90%"
            });
          }}
        >
          Try it out
        </a>
      </h2>
      <li>
        <b>Note</b>: after selecting your deck name there is a bug where the
        cards will not show up the first time.
      </li>
      <br />
      View it on <a href="https://github.com/deckitron/deckitron">Github</a>
      <br />
      <br />
      <br />
      Over the course of 48 hours, our 4 person team built a web app was using
      NodeJS, Angular, Express, and MongoDB for a “Magic the Gathering”
      collaborative deck building application. The application uses websockets
      for chat and sharing/linking cards, as well as a NoSQL database for
      storing card lists to specific URLs.
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
)(Deckitron);
