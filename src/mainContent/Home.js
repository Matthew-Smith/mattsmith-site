import React from "react";
import { NavLink } from "react-router-dom";
import { goToTop } from "react-scrollable-anchor";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

import Profile from "../Profile/Profile";

import "./styles/Home.css";

const Home = () => {
  return (
    <div>
      <Segment className="segmentSection" vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" className="sectionHeader">
                Hi, I'm Matthew Smith
              </Header>
              <p className="homeTextBody">
                I am a primarily front end software developer but I am also
                interested in moving into full stack development. Please feel
                free to reach out to me about side projects or career
                opportunities!
              </p>

              <Divider />

              <Header as="h3" className="sectionHeader">
                I have sample projects
              </Header>
              <p className="homeTextBody">
                I have selected a couple sample projects from my Github that I
                am either particularly proud of or that I think are pretty cool.
              </p>
              <NavLink to="/projects">
                <Button size="huge" onClick={goToTop}>
                  Check Them Out
                </Button>
              </NavLink>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Profile />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment className="segmentSection" vertical>
        <Container text>
          <Header as="h3" className="sectionHeader">
            Education
          </Header>

          <Header as="h4" className="schoolHeader">
            Carleton University
          </Header>
          <Header as="h5" className="schoolProgram">
            Software Engineering Degree
          </Header>
          <p className="homeTextBody">
            <span>September 2010 - June 2014</span>
            After finishing College I felt that I had a lot more to learn before
            I could really succeed in software development, to accomplish that I
            decided on Carleton University. The most interesting project was our
            fourth year project. It was a very simple gesture based UI for an AR
            system we build with an Oculus Rift and two webcams. You can see an
            early concept video without the UI here:{" "}
            <a href="https://youtu.be/RczHeTjKIBM">
              https://youtu.be/RczHeTjKIBM
            </a>
          </p>

          <Divider />

          <Header as="h4" className="schoolHeader">
            Algonquin College
          </Header>
          <Header as="h5" className="schoolProgram">
            Game Development Diploma
          </Header>
          <p className="homeTextBody">
            <span>September 2006 - June 2009</span>
            I have a love of video games and video game development, much of
            that I can attribute back to learning about game development with
            other passionate game developers at Algonquin. At this point in my
            life it is just a hobby, some things I develop on the side, but
            After High school I decided that it would be my full time career and
            Algonquin was my school of choice. You can see a demo reel of many
            projects we worked on here:{" "}
            <a href="https://youtu.be/0QakWOG3WcU">
              https://youtu.be/0QakWOG3WcU
            </a>
          </p>
        </Container>
      </Segment>
    </div>
  );
};

export default Home;
