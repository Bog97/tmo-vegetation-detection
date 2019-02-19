import React, { Component } from 'react';

export class Image extends Component {

    render() {
        return (
            <div className="col-6 p-0 imageBackground">
                <div className="ml-auto mr-auto w-75 mt-3 mb-3">
                    <h1 className="text-dark text-center mb-5">Device Camera View</h1>
                    <img className="vegeImage" src="https://northernwoodlands.org/images/articles/powerlines_1.jpg" alt="powerlines" />
                </div>
            </div>
        )
    }
}