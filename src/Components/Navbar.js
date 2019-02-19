import React, { Component } from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <header className="nav">
                <div className="col-1-special">
                    {/*Place holder for hamberger icon*/}
                </div>

                <Router>
                    <h1 className="title col-5 mb-1"><Link id="title-link" to="/">NB-IoT Vegetation Detection</Link></h1>
                </Router>

                <div className="container h-100 col-4">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="Search for a device name" />
                            <a href="/" className="search_icon"><i className="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <div className="mt-2">
                        <img className="logo" alt="T-Mobile Logo" src="/img/logo3.png" />
                    </div>
                </div>
            </header>
        );
    }
}
