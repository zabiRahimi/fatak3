import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Head from './head.js';
import Slider from './slider.js';

class Header extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="headerContiner">
                <Head />
                <Slider />
            </div>
        )
    }
}

export default Header;

