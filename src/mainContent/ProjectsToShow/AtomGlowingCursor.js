import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AtomGlowingCursor extends Component {
    render() {
        return <div>
            <a href='https://atom.io/packages/glowing-cursor'>Atom.io Glowing Cursor</a>
            <hr />
        </div>;
    }
}
AtomGlowingCursor.contextTypes = {
    store: PropTypes.object
};

export default AtomGlowingCursor;

