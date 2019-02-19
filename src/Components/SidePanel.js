import React, { Component } from "react";
import { scaleRotate as Menu } from 'react-burger-menu';
import { HashRouter as Router, Link } from "react-router-dom";
import Radium from "radium";

// Allows side panel to work properly with react router
let RadiumLink = Radium(Link);

/* Example from http://github.com/negomi/react-burger-menu */
export class SidePanel extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Router>
                <>
                    <Menu width={'200px'} pageWrapId={this.props.pageWrap} outerContainerId={this.props.outerContainer}>
                        <RadiumLink className="magenta-link" to="/">Home</RadiumLink>
                        <RadiumLink className="magenta-link" to="/about">About</RadiumLink>
                        <RadiumLink className="magenta-link" to="/device">Device</RadiumLink>
                    </Menu >
                </>
            </Router>
        );
    }
}