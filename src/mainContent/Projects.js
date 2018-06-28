import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AtomGlowingCursor from './ProjectsToShow/AtomGlowingCursor';
import Deckitron from './ProjectsToShow/Deckitron';
import ElectronCalc from './ProjectsToShow/ElectronCalc';
import MattSmithSite from './ProjectsToShow/MattSmithSite';
import MenuSystem from './ProjectsToShow/MenuSystem';

import './styles/Projects.css';
import './styles/mainContent.css';

class Projects extends Component {
    render() {
        return <div>
            <MattSmithSite />
            <Deckitron />
            <ElectronCalc />
            <MenuSystem />
            <AtomGlowingCursor />
        </div>;
    }
}
Projects.contextTypes = {
    store: PropTypes.object
};

export default Projects;
