import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class MattSmithSite extends Component {
    render() {
        return (<ProjectCard
                headerText='This Website - Built with React'
                anchorName='ThisWebsite'>
            View it on <a href='https://github.com/Matthew-Smith/mattsmith-site'>Github</a>
        </ProjectCard>)
    }
}

export default MattSmithSite;
