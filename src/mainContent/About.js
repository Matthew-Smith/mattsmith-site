import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Profile from '../Profile/Profile';


class About extends Component {
    render() {
        return <div>
            <Profile />
            My name is Matthew Smith and I live in Ottawa Ontario Canada!
        </div>;
    }
}
About.contextTypes = {
    store: PropTypes.object
};

export default About;
