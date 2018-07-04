import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import { goToTop } from "react-scrollable-anchor";

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="External Links" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/matthew-smith-52553b66/"
                  >
                    Linkedin
                  </List.Item>
                  <List.Item as="a" href="https://github.com/Matthew-Smith">
                    GitHub
                  </List.Item>
                  <List.Item as="a" href="mailto:matt@mattsmith.site">
                    Email
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  Navigate
                </Header>
                <List link inverted>
                  <List.Item as="a" onClick={goToTop}>
                    Back To Top
                  </List.Item>
                  <List.Item as={NavLink} onClick={goToTop} exact to="/">
                    Home
                  </List.Item>
                  <List.Item as={NavLink} onClick={goToTop} exact to="/skills">
                    Skills
                  </List.Item>
                  <List.Item
                    as={NavLink}
                    onClick={goToTop}
                    exact
                    to="/projects"
                  >
                    Projects
                  </List.Item>
                  <List.Item as={NavLink} onClick={goToTop} exact to="/contact">
                    Contact
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
