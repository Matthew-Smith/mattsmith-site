import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

class MenuSystem extends Component {
    render() {
        return (<ProjectCard
                headerText='WebGL TV Menu System'
                anchorName='MenuSystem'>
            <a href='http://menusystem.mattsmith.site'>Try it out </a>
            <br />
            View it on <a href='https://github.com/Matthew-Smith/MenuSystem'>Github</a>
        </ProjectCard>)
    }
}
MenuSystem.contextTypes = {
    store: PropTypes.object
};

export default MenuSystem;

