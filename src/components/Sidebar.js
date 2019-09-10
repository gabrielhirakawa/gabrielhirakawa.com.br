import React, { Component } from "react";
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component{
    render(){
        return(
            <div id="side">
                <div id="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div class="redes-sociais">
                    <ul>
                       
                    <li><FontAwesomeIcon icon={faGithub} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li> <FontAwesomeIcon icon={faYoutube} /></li>
                    <li> <FontAwesomeIcon icon={faEnvelope} /></li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;