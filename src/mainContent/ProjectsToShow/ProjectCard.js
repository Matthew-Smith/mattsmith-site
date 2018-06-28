import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor'

class ProjectCard extends Component {
    render() {
        return (<ScrollableAnchor id={this.props.anchorName}>
            <div className='projectCard'>
                <div className='cardHeader'>
                    <h1>{this.props.headerText}</h1>
                </div>
                <div className='cardBody'>
                    {this.props.children}
                </div>
                <br />
            </div>
        </ScrollableAnchor>)
    }
}

ProjectCard.propTypes = {
    headerText: PropTypes.string.isRequired,
    anchorName: PropTypes.string.isRequired
}

export default ProjectCard;

