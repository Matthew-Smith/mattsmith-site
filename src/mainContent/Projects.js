import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Projects extends Component {
    render() {
        return <div>
            <a href='http://deckitron.mattsmith.site'>Deckitron</a>
            <hr />
            <a href='http://menusystem.mattsmith.site'>Menu System</a>
            <hr />
            <a href='https://github.com/Matthew-Smith/electronCalc'>Calculator in Electron</a>
            <hr />
            <a href='https://atom.io/packages/glowing-cursor'>Atom.io Glowing Cursor</a>
        </div>;
    }
}
Projects.contextTypes = {
    store: PropTypes.object
};

export default Projects;
