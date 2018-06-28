import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { hidePopup } from './actions';

import './styles/Popup.css';

class Popup extends Component {

    static defaultProps = {
        width: '90%',
        height: '90%',
        title: 'Try It Out'
    }

    hidePopup(event) {
        event.preventDefault();
        hidePopup();
    }

    render() {
        return (
        <div className={'popupOverlay'} onClick={this.hidePopup}>
            <div className='popup'
                style={{
                    width: this.props.width,
                    height: this.props.height
                }}>
                <button className='closeButton'><span /></button>
                <iframe
                    src={this.props.URL}
                    title={this.props.title}
                >
                </iframe>
            </div>
        </div>)
    }
}

Popup.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    URL: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default Popup;

