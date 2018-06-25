import React, { Component } from 'react';
import Profile from './Profile/Profile'
import './styles/App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="header">
                <h1 className="title">Hello World</h1>
                <Profile />
            </header>
            <p className="intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
        );
    }
}

export default App;
