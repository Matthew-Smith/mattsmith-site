import PropTypes from "prop-types";
import { Route } from "react-router";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { goToTop } from "react-scrollable-anchor";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Icon
} from "semantic-ui-react";

import Header from "./Header";
import { setSidebarOpen, toggleSidebar } from "../actions";

const MobileContainer = ({
  children,
  sidebarOpen,
  showSidebar,
  hideSidebar,
  toggleSidebar
}) => {
  return (
    <Responsive {...Responsive.onlyMobile}>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="uncover"
          inverted
          vertical
          visible={sidebarOpen}
        >
          <Container onClick={goToTop}>
            <Menu.Item as={NavLink} exact to="/" onClick={hideSidebar}>
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} exact to="/skills" onClick={hideSidebar}>
              Skills
            </Menu.Item>
            <Menu.Item as={NavLink} exact to="/projects" onClick={hideSidebar}>
              Projects
            </Menu.Item>
            <Menu.Item as={NavLink} exact to="/contact" onClick={hideSidebar}>
              Contact
            </Menu.Item>
          </Container>
        </Sidebar>

        <Sidebar.Pusher
          dimmed={sidebarOpen}
          onClick={sidebarOpen ? hideSidebar : null}
          style={{ minHeight: "100vh" }}
        >
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={showSidebar}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <Route exact path="/" component={Header} />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => {
  return {
    sidebarOpen: state.sidebarOpen
  };
};

const mapDispatchToProps = dispatch => ({
  showSidebar: () => {
    dispatch(setSidebarOpen(true));
  },
  hideSidebar: () => {
    dispatch(setSidebarOpen(false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileContainer);
