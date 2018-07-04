import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { Button, Container, Header, Icon } from "semantic-ui-react";

import "./Header.css";

const HomepageHeading = ({ mobile }) => {
  return (
    <Container text className="headerContainer">
      <Header
        as="h1"
        content="Matthew Smith"
        inverted
        className={"myName" + (mobile ? " mobile" : "")}
      />
      <Header
        as="h2"
        content="Experienced frontend web developer."
        inverted
        className={"shortDescription" + (mobile ? " mobile" : "")}
      />
      <NavLink to="/contact">
        <Button primary size="huge">
          Contact
          <Icon name="right arrow" />
        </Button>
      </NavLink>
    </Container>
  );
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mobile: state.mobile
  };
};

export default connect(
  mapStateToProps,
  undefined
)(HomepageHeading);
