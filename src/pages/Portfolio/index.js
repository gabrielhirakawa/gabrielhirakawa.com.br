import React, { Component } from "react";
import img from '../../assets/img.png';
import nodeLogo from '../../assets/node.png';
import jsLogo from '../../assets/js.png';
import reactLogo from '../../assets/react.png';
import animamente from '../../assets/animamente.jpg';

import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUndoAlt, faCode } from '@fortawesome/free-solid-svg-icons'
import { SideEffect } from './styleSidebar';

import { Link } from 'react-router-dom';
import { Texto, AboutTitle, AboutContent, BackLink } from './styles';

class About extends Component{
    render(){
        return (
            <div id="main">
                <SideEffect>
                <div id="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <AboutContent>
                        <AboutTitle>About <FontAwesomeIcon icon={faCode} /></AboutTitle>
                        <Texto>
                            <p>
                            Atualmente desenvolvo projetos com foco na stack JS (Node, React e React Native).
                            </p>
                            <img src={jsLogo}/>
                            <img src={nodeLogo}/>
                            <img src={reactLogo}/>
                        </Texto>
                        <Texto>
                            <p>
                            Roteirista do canal <a target="_blank" href="https://www.youtube.com/channel/UC5rAUc_JK2TIGu-2an-DYMA">Animamente</a>, onde escrevo assuntos sobre tecnologia.
                            </p>
                            <img src={animamente}/>
                        </Texto>
                        <BackLink>
                            <Link to="/">
                                Voltar
                                <span><FontAwesomeIcon icon={faUndoAlt} /></span>
                                </Link>
                            
                        </BackLink>
                        
                    </AboutContent>
                <div class="redes-sociais">
                    <ul>
                    <li><FontAwesomeIcon icon={faGithub} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li> <FontAwesomeIcon icon={faYoutube} /></li>
                    <li> <FontAwesomeIcon icon={faEnvelope} /></li>
                    </ul>
                </div>
            </SideEffect>
                <div class="layout">
                    <img class="" src={img} />
                    
                    
                </div>
            </div>
        );
    }
}

export default About;