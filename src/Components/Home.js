import React, { Component } from 'react';
import background from "../background/powerlines.jpg";

let backgroundStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${background})`
};

export class Home extends Component {
    render() {
        return (
            <div style={backgroundStyle}>
                <div className="intro row p-3 justify-content-center">
                    <h1 className="pb-5">T-Mobile <br /> NB-IoT Vegetation Detection Device <br /> Capstone Project</h1>
                    <h3>Part of the Electrical Engineering 496/497 Entrepenurial Capstone 2019</h3>
                </div>
                <div className="project-description-section">
                    <h2>Project Objectives</h2>

                    {/* Icons from Icons8.com */}
                    <div className="row m-0 p-3">

                        <div className="col-3">
                            <div className="card bg-dark text-light mt-5 mb-4 intro-card">
                                <img className="card-img-top p-5" src="img/iot.png" alt="internet of things" />
                                <div className="card-body">
                                    <h5 className="card-title">NB-IoT Communication</h5>
                                    <p className="card-text">Using the T-Mobile network, we are able to communicate with our Twilio dev kits using NB-IoT technology.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card bg-dark text-light mt-5 mb-4 intro-card">
                                <img className="card-img-top p-5" src="img/camera.png" alt="camera" />
                                <div className="card-body">
                                    <h5 className="card-title">Camera View of Power Lines</h5>
                                    <p className="card-text">A camera module takes pictures on its own of the power lines and the surrounding vegetation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card bg-dark text-light mt-5 mb-4 intro-card">
                                <img className="card-img-top p-5" src="img/vision.png" alt="computer vision" />
                                <div className="card-body">
                                    <h5 className="card-title">Computer Vision</h5>
                                    <p className="card-text">Use edge detection to analyze whether vegetation is near or is impacting the power lines.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card bg-dark text-light mt-5 mb-4 intro-card">
                                <img className="card-img-top p-5" src="img/vision2.png" alt="computer vision" />
                                <div className="card-body">
                                    <h5 className="card-title">Machine Learning</h5>
                                    <p className="card-text">Compare images to improve accuracy of vegetation detection and improve overall device efficiency.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}