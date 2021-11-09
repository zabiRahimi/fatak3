import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";
import AddOrder from './addOrder.js';
import FollowUpOrder from './followUpOrder.js';




class MenuMiddle extends Component {
    constructor(props) {
        super(props)
       
        
    }
  
   
    componentDidMount(){
        
        }
  
        
    
    render() {
        return (
            <div className="menuMiddelContiner" id='menuMiddelContiner'>
               <AddOrder />
               <FollowUpOrder />
            </div>
        )
    }
}


export default MenuMiddle;