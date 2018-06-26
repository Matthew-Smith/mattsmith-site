import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuSystem extends Component {
    render() {
        return <div>
            <a href='http://menusystem.mattsmith.site'>MenuSystem</a>
            <hr />
        </div>;
    }
}
MenuSystem.contextTypes = {
    store: PropTypes.object
};

export default MenuSystem;

