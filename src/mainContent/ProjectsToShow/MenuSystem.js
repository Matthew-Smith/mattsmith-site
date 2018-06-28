import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { showPopup } from '../../actions';
import ProjectCard from './ProjectCard';

const tryItURL = 'http://menusystem.mattsmith.site';

class MenuSystem extends Component {

    openPopup(event) {
        event.preventDefault();
        showPopup({
            URL: tryItURL,
            width: '1280px',
            height: '720px'
        });
    }

    render() {
        return (<ProjectCard
                headerText='WebGL TV Menu System'
                anchorName='MenuSystem'>
            <h2><a href={tryItURL}>Try it out </a></h2>
            <br />
            View it on <a href='https://github.com/Matthew-Smith/MenuSystem'>Github</a>
        </ProjectCard>)
    }
}
MenuSystem.contextTypes = {
    store: PropTypes.object
};

export default MenuSystem;

