import PropTypes from "prop-types";
import React from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import { Responsive } from "semantic-ui-react";

const ResponsiveContainer = ({ children }) => {
  let responsiveMobileRange = { ...Responsive.onlyTablet };
  responsiveMobileRange.minWidth = 0;

  return (
    <div>
      <Responsive maxWidth={Responsive.onlyComputer.minWidth}>
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
