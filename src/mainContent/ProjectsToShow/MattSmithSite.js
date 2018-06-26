import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MattSmithSite extends Component {
    render() {
        return <div>
            <a href='https://github.com/Matthew-Smith/mattsmith-site'>This Website</a>
            <hr />
        </div>;
    }
}
MattSmithSite.contextTypes = {
    store: PropTypes.object
};

export default MattSmithSite;
