import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

const exampleURL =
  "https://i.github-camo.com/7e8988157ecd5172d3e438e70b659b59ba77912f/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f4d6174746865772d536d6974682f61746f6d2d676c6f77696e672d637572736f722f6d61737465722f676c6f77696e672d637572736f722e676966";

class AtomGlowingCursor extends Component {
  render() {
    return (
      <ProjectCard
        headerText="Glowing Cursor Package for Atom Editor"
        anchorName="GlowingCursor"
      >
        <img src={exampleURL} alt="Example" className="mainImage" />
        See the published{" "}
        <a href="https://atom.io/packages/glowing-cursor">Atom Package</a>
        <br />
        View it on{" "}
        <a href="https://github.com/Matthew-Smith/atom-glowing-cursor">
          Github
        </a>
        <br />
        <br />
        Built for aesthetic purposes using Less and CoffeeScript, this is a
        plugin for Github’s Atom.io text editor. This plugin causes the user’s
        cursor to glow a customizable colour.
      </ProjectCard>
    );
  }
}

export default AtomGlowingCursor;
