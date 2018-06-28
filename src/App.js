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
import Popup from './Popup';

class App extends Component {

    renderPopup() {
        const state = this.context.store.getState();
        if (state.popupData.URL) {
            return (<Popup
                URL={state.popupData.URL}
                width={state.popupData.width}
                height={state.popupData.height}
            />);
        }
    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        let tabs = [];
        for (let key in contentTabs) {
            tabs.push(<Tab key={contentTabs[key].title} {...contentTabs[key]} />);
        }
        return (
        <div id='App' className='App'>
            <header className='header'>
            {tabs}
            </header>
            <div className='contentBody'>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/skills' component={Skills} />
                <Route exact path='/projects' component={Projects} />
            </div>
            {this.renderPopup()}
        </div>
        );
    }
}
App.contextTypes = {
    store: PropTypes.object
};


export default App;
