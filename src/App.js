import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

import Tab from './Tab';
import contentTabs from './contentTabs.json';

import About from './mainContent/About';
import Home from './mainContent/Home';
import Projects from './mainContent/Projects';
import Skills from './mainContent/Skills';

import './styles/App.css';

class App extends Component {
    render() {
        const { store } = this.context;
        const state = store.getState();
        let tabs = [];
        for (let key in contentTabs) {
            tabs.push(<Tab key={contentTabs[key].title} {...contentTabs[key]} />);
        }
        return (
        <div className='App'>
            <header className='header'>
            {tabs}
            </header>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/projects' component={Projects} />
            <div className={'popupOverlay ' + (state.popupURL ? 'show' : '')}></div>
        </div>
        );
    }
}
App.contextTypes = {
    store: PropTypes.object
};


export default App;
