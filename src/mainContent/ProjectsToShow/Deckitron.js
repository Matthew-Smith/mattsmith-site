import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { showPopup } from '../../actions';
import ProjectCard from './ProjectCard';

const tryItURL = 'http://deckitron.mattsmith.site';

class Deckitron extends Component {

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
                headerText='Deckitron - Magic The Gathering Deck Building'
                anchorName='Deckitron'>
            <h2><a href={tryItURL} onClick={this.openPopup}>Try it out</a></h2>
            <li><b>Note</b>: after selecting your deck name there is a bug
            where the cards will not show up until you refresh the page.</li>
            <br />
            View it on <a href='https://github.com/deckitron/deckitron'>Github</a>
        </ProjectCard>)
    }
}
Deckitron.contextTypes = {
    store: PropTypes.object
};

export default Deckitron;

