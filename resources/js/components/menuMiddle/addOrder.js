import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";



class AddOrder extends Component {
    constructor(props) {
        super(props)
       
        
    }
  
   
    componentDidMount(){
        
        }
  
        
    
    render() {
        return (
            <div className="addOrderAndFollowUpContiner" >
                سفارش محصول جدید
                <Link to='/user/showVerifyMobile'>as</Link>
            </div>
        )
    }
}


export default AddOrder;