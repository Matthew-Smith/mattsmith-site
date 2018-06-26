import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deckitron extends Component {
    render() {
        return <div>
            <a href='http://deckitron.mattsmith.site'>Deckitron</a>
            <hr />
        </div>;
    }
}
Deckitron.contextTypes = {
    store: PropTypes.object
};

export default Deckitron;

