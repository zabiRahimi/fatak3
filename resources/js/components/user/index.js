import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Routes , Route, Outlet } from "react-router-dom";
import Login from './login';
import Register from './register';
import ShowVerifyMobile from './showVerifyMobile.js';




export default function User() {

    return (
       
        <div className="container2">
            {/* <Routes >
            <Route path="login" element={<Login />} />
                <Route  path="login">
                    <Login />
                </Route>
                <Route  path="register">
                    <Register />
                </Route>
                <Route  path="showVerifyMobile">
                        <ShowVerifyMobile />
                    </Route>
            </Routes> */}
            {/* <OutLet /> */}
            <Outlet />
        </div>
    
    )

}


