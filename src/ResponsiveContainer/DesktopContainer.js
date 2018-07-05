import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import { goToTop } from "react-scrollable-anchor";
import { Container, Menu, Segment, Visibility } from "semantic-ui-react";

import { setMenuFixed } from "../actions";
import Header from "./Header";

const DesktopContainer = ({
  children,
  menuFixed,
  makeMenuFixed,
  makeMenuNotFixed
}) => {
  return (
    <div>
      <Visibility
        once={false}
        onBottomPassed={makeMenuFixed}
        onBottomPassedReverse={makeMenuNotFixed}
      >
        <Segment inverted textAlign="center" vertical>
          <Menu
            fixed={menuFixed ? "top" : null}
            inverted={!menuFixed}
            pointing={!menuFixed}
            secondary={!menuFixed}
            size="large"
          >
            <Container onClick={goToTop}>
              <Menu.Item as={NavLink} exact to="/">
                Home
              </Menu.Item>
              <Menu.Item as={NavLink} exact to="/skills">
                Skills
              </Menu.Item>
              <Menu.Item as={NavLink} exact to="/projects">
                Projects
              </Menu.Item>
              <Menu.Item as={NavLink} exact to="/contact">
                Contact
              </Menu.Item>
            </Container>
          </Menu>
          <Route exact path="/" component={Header} />
        </Segment>
      </Visibility>

      {children}
    </div>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => {
  return {
    menuFixed: state.menuFixed
  };
};

const mapDispatchToProps = dispatch => ({
  makeMenuFixed: () => {
    dispatch(setMenuFixed(true));
  },
  makeMenuNotFixed: () => {
    dispatch(setMenuFixed(false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesktopContainer);
