import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

const exampleURL = 'https://media.githubusercontent.com/media/Matthew-Smith/electronCalc/master/screenshot.png';

class ElectronCalc extends Component {
    render() {
        return (<ProjectCard
                headerText='Simple Electron Calculator App'
                anchorName='ElectronCalculator'>
            <img src={exampleURL} alt="Example" className='mainImage'/>
            View it on <a href='ttps://github.com/Matthew-Smith/electronCalc'>Github</a>
        </ProjectCard>)
    }
}

export default ElectronCalc;

