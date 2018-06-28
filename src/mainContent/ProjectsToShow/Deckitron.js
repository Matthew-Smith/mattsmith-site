import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

class Deckitron extends Component {
    render() {
        return (<ProjectCard
                headerText='Deckitron - Magic The Gathering Deck Building'
                anchorName='Deckitron'>
            <a href='http://deckitron.mattsmith.site'>Try it out</a>. Note that after selecting your deck name there is a bug
            where the cards will not show up until you refresh the page.
            <br />
            View it on <a href='https://github.com/deckitron/deckitron'>Github</a>
        </ProjectCard>)
    }
}
Deckitron.contextTypes = {
    store: PropTypes.object
};

export default Deckitron;

