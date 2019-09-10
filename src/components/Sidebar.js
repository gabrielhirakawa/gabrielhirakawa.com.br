import React, { Component } from "react";
import Logo from '../assets/logo.png';

class Sidebar extends Component{
    render(){
        return(
            <div id="side">
                <div id="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div class="redes-sociais">
                    <ul>
                        <li>
                        <i class="fab fa-github"/>
                        <i class="fab fa-linkedin"/>
                        <i class="fab fa-youtube"/>
                        <i class="fas fa-envelope"/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;