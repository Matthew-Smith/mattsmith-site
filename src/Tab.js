import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import './styles/Tabs.css';


class Tab extends Component {
    static defaultProps = {
        icon: 'exclamation-triangle',
        title: 'Missing Title'
    };

    render() {
        const { store } = this.context;
        const state = store.getState();
        let selected = false;
        if (this.props.route === state.routerReducer.location.pathname) {
            selected = true;
        }

        return (
        <NavLink
            to={this.props.route}
        >
            <div className={'Tab ' + (selected ? 'selected' : '')}>
                <span className={'fa fa-' + this.props.icon}></span> {this.props.title}
            </div>
        </NavLink>
        );
    }
}
Tab.contextTypes = {
    store: PropTypes.object
};

export default Tab;
