import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { hidePopup } from "./actions";

import "./styles/Popup.css";

const Popup = ({ popupData, hidePopup }) => {
  if (!popupData.URL) {
    return null;
  }
  return (
    <div className={"popupOverlay"} onClick={hidePopup}>
      <div
        className="popup"
        style={{
          width: popupData.width,
          height: popupData.height
        }}
      >
        <button className="closeButton" onClick={hidePopup}>
          <span />
        </button>
        <iframe src={popupData.URL} title="Try it Out" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state.popupData;
};

const mapDispatchToProps = dispatch => ({
  hidePopup: popupData => dispatch(hidePopup(popupData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
