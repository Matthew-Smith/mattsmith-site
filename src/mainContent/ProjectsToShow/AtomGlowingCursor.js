import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const screenshot =
  "https://i.github-camo.com/7e8988157ecd5172d3e438e70b659b59ba77912f/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f4d6174746865772d536d6974682f61746f6d2d676c6f77696e672d637572736f722f6d61737465722f676c6f77696e672d637572736f722e676966";

const AtomGlowingCursor = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Image src={screenshot} floated="right" />
        <Card.Header>Glowing Cursor Package for Atom Editor</Card.Header>
        <Card.Meta>November 2015</Card.Meta>
        <Card.Description>
          <br /> Built for aesthetic purposes using Less and CoffeeScript, this
          is a plugin for GitHub’s Atom.io text editor. This plugin causes the
          user’s cursor to glow a customizable colour.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          href="https://atom.io/packages/glowing-cursor"
          className="cardButton"
        >
          <Button icon labelPosition="left" color="green">
            <Icon name="cog" />See the published Atom Package
          </Button>
        </a>
        <a
          href="https://github.com/Matthew-Smith/atom-glowing-cursor"
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
// class AtomGlowingCursor extends Component {
//   render() {
//     return (
//       <ProjectCard headerText="" anchorName="GlowingCursor">
//         <img src={exampleURL} alt="Example" className="mainImage" />
//         See the published <a href="">Atom Package</a>
//         <br />
//         View it on <a href="">GitHub</a>
//         <br />
//         <br />
//       </ProjectCard>
//     );
//   }
// }

export default AtomGlowingCursor;
