import React, { Component } from "react";

export class About extends Component {
    render() {
        return (
            <div>
                <h2 id="about">About Us</h2>

                <div className="card-deck p-5">
                    <div className="card">
                        <img className="card-img-top" src="https://image.flaticon.com/icons/png/512/21/21294.png" alt="Bogdan's Profile" />
                        <div className="card-body">
                            <h5 className="card-title">Bogdan Tudos</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="https://image.flaticon.com/icons/png/512/21/21294.png" alt="Ying's Profile" />
                        <div className="card-body">
                            <h5 className="card-title">Ying Chui</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="https://image.flaticon.com/icons/png/512/21/21294.png" alt="Zidi's Profile" />
                        <div className="card-body">
                            <h5 className="card-title">Zidi Wei</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}