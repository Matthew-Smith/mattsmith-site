import PropTypes from "prop-types";
import React from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import { Responsive } from "semantic-ui-react";

const ResponsiveContainer = ({ children }) => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <MobileContainer>{children}</MobileContainer>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <MobileContainer>{children}</MobileContainer>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <DesktopContainer>{children}</DesktopContainer>
      </Responsive>
    </div>
  );
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
