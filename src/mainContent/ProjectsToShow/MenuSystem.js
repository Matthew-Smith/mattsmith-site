import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showPopup } from '../../actions';
import ProjectCard from './ProjectCard';

const tryItURL = 'http://menusystem.mattsmith.site';

const MenuSystem = ({ showPopup }) => {
    return (<ProjectCard
            headerText='WebGL TV Menu System'
            anchorName='MenuSystem'>
        <h2><a href={tryItURL} onClick={(event) => {
            event.preventDefault();
            showPopup({
                URL: tryItURL,
                width: '1280px',
                height: '720px'
            });
        }}>Try it out </a></h2>
        <br />
        View it on <a href='https://github.com/Matthew-Smith/MenuSystem'>Github</a>
    </ProjectCard>)
}

const mapDispatchToProps = dispatch => ({
    showPopup: popupData => {
        dispatch(showPopup(popupData))
    }
});

export default connect(
    undefined,
    mapDispatchToProps
)(MenuSystem);