import React, { Component } from "react";
import img from '../../assets/img.png';
import nodeLogo from '../../assets/node.png';
import jsLogo from '../../assets/js.png';
import reactLogo from '../../assets/react.png';
import animamente from '../../assets/animamente.jpg';

import { Link } from 'react-router-dom';
import { Texto, AboutTitle, AboutContent } from './styles';

class About extends Component{
    render(){
        return (
            <div id="main">
                <div class="layout">
                    <img class="" src={img} />
                    <AboutContent>
                        <AboutTitle>About</AboutTitle>
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
                        
                        <Link to="/">Voltar</Link>
                    </AboutContent>
                </div>
            </div>
        );
    }
}

export default About;