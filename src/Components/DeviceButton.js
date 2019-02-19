import React, { Component } from 'react';

export class DeviceButton extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary deviceButton m-2 btn-large">{this.props.name}</button>
            </div>
        )
    }
}