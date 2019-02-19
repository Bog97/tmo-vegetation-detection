import React, { Component } from 'react';
import { DeviceButton } from "./DeviceButton";

export class Tools extends Component {

    render() {
        return (
            <div className="col-6 pr-2 d-flex flex-column">
                <h1 className="text-dark text-center mt-3">Device Tools</h1>
                <div className="mt-auto mb-auto bg-dark mr-auto ml-auto w-75">
                    <p className="text-light text-center mt-2">Use the buttons below to communicate with the device:</p>
                    <div className="tool-box-center mb-2">
                        <DeviceButton name="Ping Device" />
                        <DeviceButton name="Take Picture" />
                        <DeviceButton name="Sensor Data" />
                    </div>
                </div>
            </div>
        )
    }
}