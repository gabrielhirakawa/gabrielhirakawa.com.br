import React, { Component } from "react";
import Logo from '../assets/logo.png';
import Social from './Social';


class Sidebar extends Component{
    render(){
        return(
            <div className="sideHome" id="side">
                <div className="logo logoHome">
                    <img src={Logo} alt="logo"/>
                </div>
                <Social />
            </div>
        );
    }
}

export default Sidebar;