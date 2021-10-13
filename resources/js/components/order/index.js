import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";



class Order extends Component {
    constructor(props) {
        super(props)
        // this.state = 
    }
    componentDidMount(){
        
    }
    render() {
        // const location=useLocation();
        return (
            <div className="orderContiner" id='orderContiner'>
                Order
                {/* {location.pathname} */}
            </div>
        )
    }
}
export default Order;