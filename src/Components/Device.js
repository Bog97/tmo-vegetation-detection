import React, { Component } from 'react';
import { Image } from "./Image";
import { Tools } from "./Tools";

export class Device extends Component {
    render() {
        return (
            <>
                <Tools />
                <Image />
            </>
        );
    }
}