import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

class MattSmithSite extends Component {
  render() {
    return (
      <ProjectCard
        headerText="This Website - Built with React"
        anchorName="ThisWebsite"
      >
        View it on{" "}
        <a href="https://github.com/Matthew-Smith/mattsmith-site">GitHub</a>
        <br />
        <br />
        This Website was built primarily with the purpose of learning React and
        Redux. It is hosted on Amazon AWS S3 while the Deckitron Sample Project
        is hosted by AWS EC2. The Domain was purchsed through Google Domains and
        the DNS is set up there.
      </ProjectCard>
    );
  }
}

export default MattSmithSite;
