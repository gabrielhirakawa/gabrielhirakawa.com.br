import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Social extends Component{
    render(){
        return(
            <div class="redes-sociais">
                    <ul>
                       
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/gabrielhirakawa"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielhirakawa/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://youtube.com/gabrielhirakawa"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="mailto:gabrielhirakawa@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                        
                    </ul>
            </div>
        );
    }

}

export default Social;