import React, { Component } from "react";
import { Link } from 'react-router-dom';
import img from '../assets/img.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

class Content extends Component{
    render(){
        return(
            <div class="layout">
                <img alt="hira" src={img} />
                <div class="textocentro">
                    <div id="name">
                        <span class="firstName">GABRIEL </span>
                        <span class="lastName">HIRAKAWA</span>
                    </div>
                    <h3>Desenvolvedor FullStack</h3>
                    <p>
                    22 anos, estudante de programação,<br />
                    entusiasta em JavaScript e<br />
                    apaixonado por tecnologia.
                    </p>
                    <Link  to="about"><button class="buttonAzul">ABOUT</button></Link>
                    <Link to=""><button class="buttonBranco">PORTFOLIO</button></Link>
                </div>
            </div>
        );
    }
}

export default Content;