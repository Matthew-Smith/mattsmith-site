import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showPopup } from '../../actions';
import ProjectCard from './ProjectCard';

const tryItURL = 'http://deckitron.mattsmith.site';
const screenshot = 'https://raw.githubusercontent.com/Matthew-Smith/deckitron/master/docs/screenshot.png';

let store;

const Deckitron = ({ showPopup }) => {
    return (<ProjectCard
            headerText='Deckitron - Magic The Gathering Deck Building'
            anchorName='Deckitron'>
        <img src={screenshot} alt='Screenshot' className='mainImage'/>
        <h2><a href={tryItURL} onClick={(event) =>{
            event.preventDefault();
            showPopup({
                URL: tryItURL,
                width: '90%',
                height: '90%'
            });
        }}>Try it out</a></h2>
        <li><b>Note</b>: after selecting your deck name there is a bug
        where the cards will not show up the first time.</li>
        <br />
        View it on <a href='https://github.com/deckitron/deckitron'>Github</a>
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
)(Deckitron);

