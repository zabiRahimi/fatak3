import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ShowProSlider from './showProSlider';


class Content extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="container2">
                <ShowProSlider head='محصولات' />
                {/* <ShowProSlider head='محصولات پرفروش' /> */}
            </div>
        )
    }
}

export default Content;