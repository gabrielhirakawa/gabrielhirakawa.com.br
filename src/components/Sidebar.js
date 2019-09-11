import React, { Component } from "react";
import Logo from '../assets/logo.png';
import Social from './Social';


class Sidebar extends Component{
    render(){
        return(
            <div id="side">
                <div id="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <Social />
            </div>
        );
    }
}

export default Sidebar;