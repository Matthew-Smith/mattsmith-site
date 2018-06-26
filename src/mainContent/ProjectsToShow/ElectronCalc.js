import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ElectronCalc extends Component {
    render() {
        return <div>
            <a href='https://github.com/Matthew-Smith/electronCalc'>Calculator in Electron</a>
            <hr />
        </div>;
    }
}
ElectronCalc.contextTypes = {
    store: PropTypes.object
};

export default ElectronCalc;

