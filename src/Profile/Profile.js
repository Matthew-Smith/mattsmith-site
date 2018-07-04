import React, { Component } from "react";
import defaultProfileInfo from "./profileInfo.json";
import profilePicture from "./profile-picture.jpg";

import "./Profile.css";
import "font-awesome/css/font-awesome.min.css";

class Profile extends Component {
  static defaultProps = defaultProfileInfo;

  render() {
    return (
      <div className="profile">
        <div className="hovereffect">
          <img className="img-responsive" src={profilePicture} alt="Me" />
          <div className="overlay">
            <h2>
              {this.props.firstName}
              <span>{this.props.lastName}</span>
            </h2>
            <span className="icon-links">
              <a href={this.props.emailURL}>
                <span className="fa fa-envelope"> </span>
              </a>
              <a href={this.props.githubURL}>
                <span className="fa fa-github"> </span>
              </a>
              <a href={this.props.linkedinURL}>
                <span className="fa fa-linkedin"> </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
