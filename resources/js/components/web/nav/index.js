import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";
import NavPc from "./navPc.js";
import NavMo from "./navMo.js";


class Nav extends Component {
    constructor(props) {
        super(props)
        const lg=$("#navContiner").offset();
        this.state = { fixed:$("#navContiner").offset() }
    }
    componentDidMount(){
        window.addEventListener('load',()=>{
            var fixed=$('#navContiner').offset();
            window.addEventListener("resize", ()=>{
                fixed=$('#navContiner').offset();
            });
            window.addEventListener('scroll',()=>{
                    if ($(document).scrollTop() > fixed.top) {
                      $('#navContiner').css({"width":"100%","top":"-5px","position": "fixed" , "z-index": "333333"});
                    }
                  else{
                      $('#navContiner').css({"position": " relative"});
                  }
                  });
        })
    }
    render() {
        return (
            <div className="navContiner" id='navContiner'>
                <div className="navCRight">
                    <div className="NavPc"><NavPc  /></div>
                    <div className="NavMo"><NavMo  /></div>
                </div>
                <div className="navCLeft"><img src="./images/imageWeb/iran.png"/></div>
            </div>
        )
    }
}
export default Nav;