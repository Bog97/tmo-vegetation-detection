import React, { Component } from 'react';

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
    }


    getImage() {
        let url = "https://k4pjs8jkig.execute-api.us-east-1.amazonaws.com/dev/img";

        return (window.fetch(url, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=utf-8",
            }
        }).then((response) => {
            return response.json();
        }).then((response) => {
            // this.setState({ 
            //     img: response.img
            // });
            console.log(response);
        }).catch((err) => {
            console.log(err);
        }));
    }

    render() {
        return (
            <div className="col-6 p-0 imageBackground">
                <div className="ml-auto mr-auto w-75 mt-3 mb-3">
                    <h1 className="text-dark text-center mb-5">Device Camera View</h1>
                    <button onClick={this.getImage}>TEST AWS IMG</button>
                    <img className="vegeImage" src={this.state.img} alt="camera view" />
                </div>
            </div>
        )
    }
}